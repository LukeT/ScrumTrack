import { Results, ResultAction, ResultSet, ResultWeight } from '../../realtime/realtime';
import { config } from './config';

// Based on https://stackoverflow.com/posts/19277804/revisions
function closest(target: number, vals: number[]): number {
	return vals.reduce((prev: number, cur: number) => {
		return (Math.abs(cur - target) < Math.abs(prev - target) ? cur : prev);
	})
}

function getMedian(data: Map<number, number[]>): number {
	const votes: number[] = [];

	Array.from(data.keys()).forEach((weight: number) => {
		data.get(weight).forEach(i => votes.push(weight));
	});

	const idx: number = Math.ceil(votes.length / 2);

	// If the median is exactly
	if (idx % 0 === 0) {
		return votes[idx];
	}

	// Calculate the exact weight that would be the median
	const lowestValue = votes[Math.floor(idx)]
	const highestValue = votes[Math.ceil(idx)]
	const accurateWeight = (highestValue + lowestValue) / 2;

	// Pick the closest value.
	return closest(accurateWeight, Array.from(data.keys()));

}

function buildSet(data: Map<number, number[]>, outliers: number[], selected: number = null): ResultSet {
	const median: number = getMedian(data);
	const weights: ResultWeight[] = []

	Array.from(data.keys()).forEach(key => {
		weights.push(new ResultWeight({
			isOutlier: outliers.includes(key),
			isMedian: median === key,
			weight: key,
			preferred: selected === key,
			voters: data.get(key) || [],
		}))
	});

	return new ResultSet({
		weights,
	});
}

export function inferResults(map: Map<number, number[]>): Results {
	console.log(map);
	let votedNumbers = [];

	// Calculate the weights with votes.
	Array.from(map.keys()).forEach(weight => {
		if (map.get(weight).length >= 1) {
			votedNumbers.push(weight);
		}
	});

	// Everyone voted for the same thing!
	if (votedNumbers.length === 1) {
		return new Results({
			isFinal: true,
			options: [
				ResultAction.CONTINUE,
				ResultAction.REVOTE,
			],
			current: buildSet(map, [], votedNumbers[0]),
		});
	}

	// See if we can get 75% of votes on 1 number.
	const voterCount = Array.from(map.values()).map(i => i.length).reduceRight((p, c) => p + c);
	const outliers = [];
	let primary = null;

	Array.from(map.keys()).forEach((weight: number) => {
		const votes = map.get(weight).length;

		if (votes > 0 && (votes / voterCount >= config.suitablePercentage)) {
			primary = weight;
		} else if (votes > 0) {
			outliers.push(weight)
		}
	});

	// We've found some form of weighting
	if (primary !== null) {
		return new Results({
			isFinal: false,
			options: [
				ResultAction.STRIP_OUTLIER,
				ResultAction.AVERAGE,
				ResultAction.REVOTE,
			],
			current: buildSet(map, outliers, primary),
		});
	}

	// No consistent data can be gathered, give some basic options.
	return new Results({
		isFinal: false,
		options: [
			ResultAction.AVERAGE,
			ResultAction.REVOTE,
		],
		current: buildSet(map, [], null),
	});
}

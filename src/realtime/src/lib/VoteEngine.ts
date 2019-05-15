import { ResultSet, Results } from '../../realtime/realtime';
import { calculateFibonacii, dedupe } from '../util/calculateFibonacci';
import { config } from '../util/config';
import { inferResults } from '../util/inferResults';

/**
 * A session voting engine, handling whether a vote is valid,
 * invalid or requires input.
 */
export class VoteEngine {
	private timer: NodeJS.Timer;
	private lastTime: Date;
	private votes: Map<number, number[]>;

	constructor(
		private tickFn: () => void,
	) {
		this.reset();
	}

	/**
	 * Reset all of the stored votes.
	 */
	private resetVotes(): void {
		this.votes = new Map();

		dedupe(calculateFibonacii(14)).slice(1).forEach((i: number) => {
			this.votes.set(i, []);
		})
	}

	/**
	 * Restarts the timer from where we left off.
	 *
	 * It's like nothing ever happened!
	 */
	public resume(): void {
		this.lastTime = new Date();
		this.timer = setTimeout(this.tickFn, config.voteTimeframe);
	}

	/**
	 * Stop the timer and produce a result.
	 */
	public stop(): Results {
		return inferResults(this.votes);
	}

	/**
	 * Reset the voting engine state, starting the timer.
	 */
	public reset(): void {
		this.resetVotes();

		clearTimeout(this.timer);

		this.resume();
	}

	/**
	 * Vote for a weighting
	 *
	 * @param userId User voting
	 * @param value Weighting
	 */
	public vote(userId: number, value: number){
		const existingVote: number | null = this.getVote(userId);

		// Remove the existing vote.
		if (existingVote !== null) {
			this.votes.set(existingVote, this.votes.get(existingVote).filter(i => i !== userId));
		}

		// set the new vote.
		this.votes.set(value, [...this.votes.get(value), userId]);
	}

	/**
	 * Get the weight a user casted
	 *
	 * @param userId User ID that voted
	 */
	public getVote(userId: number): number | null {
		const weights: number[] = Array.from(this.votes.keys());

		for (const i of weights) {
			if (this.votes.get(i).includes(userId)) {
				return i;
			}
		}

		return null;
	}

	/**
	 * Get all the users who have voted.
	 */
	public getUsers(): number[] {
		return [].concat.apply([], Array.from(this.votes.values()));
	}

	/**
	 * Whether the current vote meets the minimum vote threshold.
	 */
	public meetsVoteThreshold(): boolean {
		console.log(this.getUsers());
		return this.getUsers().length >= config.minimumVotes;
	}

	/**
	 * Get the time until the next timer tick in ms
	 */
	public timeUntilTick(): number {
		const futureTime = +this.lastTime + config.voteTimeframe;

		return Math.max(0, futureTime - +new Date());
	}
}

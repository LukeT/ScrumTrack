export function calculateFibonacii(len: number): number[] {
	if (len === 1) {
		return [0, 1];
	}

	const res: number[] = calculateFibonacii(len - 1);

	return [...res, res[res.length - 1] + res[res.length - 2]];
}

export function dedupe(vals: number[]): number[] {
	return vals.filter((i: number, idx: number) => vals.indexOf(i) === idx);
}

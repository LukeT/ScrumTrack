export class ViewSize {
	constructor(public readonly index: number = 0, public readonly maxWidth: number | null, public readonly minWidth: number | null) {

	}

	public lt(view: ViewSize): boolean {
		return this.index < view.index;
	}

	public gt(view: ViewSize): boolean {
		return this.index < view.index;
	}

	public lte(view: ViewSize): boolean {
		return this.index <= view.index;
	}

	public gte(view: ViewSize): boolean {
		return this.index >= view.index;
	}

	public eq(view: ViewSize): boolean {
		return this.index === view.index;
	}
}

export const VIEW_SIZES = { // tslint:disable-line
	EXTRA_SMALL: new ViewSize(0, 599, null),
	SMALL: new ViewSize(1, 959, 600),
	MEDIUM: new ViewSize(2, null, 960),
};

const ALL: ViewSize[] = Object.keys(VIEW_SIZES).map((i: string) => VIEW_SIZES[i]);

export function calculateSize(width: number): ViewSize {
	for (const size of ALL) {
		const satifiesMax: boolean = size.maxWidth !== null && width <= size.maxWidth;
		const satifiesMin: boolean = size.minWidth !== null && width >= size.minWidth;

		// Has both defined and fits
		if (satifiesMax && satifiesMin) {
			return size;
		}

		// Satisfies min width without a max
		if (satifiesMin && size.maxWidth === null) {
			return size;
		}

		// Satisfies max width without a min
		if (satifiesMax && size.minWidth === null) {
			return size;
		}
	}

	// Default to extra small, we shouldn't reach this.
	return VIEW_SIZES.EXTRA_SMALL;
}

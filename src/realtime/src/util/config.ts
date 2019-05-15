import { readFileSync } from 'fs';
import { join } from 'path';

export const config: {
	consul: {
		hostname: string;
		port: number;
	};
	minimumVotes: number;
	voteTimeframe: number;
	suitablePercentage: number;
	web: {
		hostname: string;
		port: number;
	}
} = JSON.parse(readFileSync(join(__dirname, '../../config.json'), 'utf8'));

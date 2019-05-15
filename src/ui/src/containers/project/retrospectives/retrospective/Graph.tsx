import * as React from 'react';
import {HorizontalGridLines, LineSeries, makeWidthFlexible, Hint, DiscreteColorLegend, MarkSeries, XAxis, XYPlot, YAxis} from 'react-vis';
import { RetrospectiveParse, LogKind } from '../RetrospectiveParse';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);
import * as styles from './Graph.scss';
import { Tabs, Tab, Spinner } from '@streamjar/ui-react';

export class Graph extends React.PureComponent<{ data: RetrospectiveParse; start: number; end: number }, { value: number, chart: string }> {

	constructor(props: { data: RetrospectiveParse; start: number; end: number }) {
		super(props);

		this.state = { value: null, chart: 'sp' };
	}

	public render(): JSX.Element {
		const body = this.props.data ? (
			<>
				{this.state.chart === 'sp' && this.chart()}
				{this.state.chart === 'tickets' && this.remaining()}
				{this.state.chart === 'history' && this.history()}
			</>
			) : (
				<Spinner />
			);

		return (
			<div className={styles.graph}>
				<Tabs value={this.state.chart} onChange={this.setTab}>
					<Tab value='sp'>Burndown</Tab>
					<Tab value='tickets'>Tickets Remaining</Tab>
					<Tab value='history'>Ticket History</Tab>
				</Tabs>

				{ body }
			</div>
		);
	}

	private readonly setTab: (tab: string) => void = (tab: string): void => {
		this.setState({ chart: tab });
	}

	private chart(): JSX.Element {
		const parse = this.props.data.getGraphs();

		if (parse.length <= 1) {
			return (
				<p style={{ padding: 10, opacity: 0.5 }}> More than 24 hours of data is required to display a chart. </p>
			);
		}

		const series = [{ x: new Date(this.props.start * 1000), y: null }, { x: new Date(this.props.end * 1000), y: null }];

		return (
			<FlexibleXYPlot
				xType='time'
				height={300}>
				<HorizontalGridLines style={{ stroke: 'rgba(255, 255, 255, 0.1)' }} />
				<XAxis title='Time' />
				<YAxis title={'Story Points'} />
				<LineSeries data={parse} stroke='#2d3a86'/>
				<LineSeries data={series} stroke='transparent' />
				<MarkSeries
					fill='#FFFFFF'
					onValueMouseOver={this.rememberValue}
					onValueMouseOut={this.forgetValue}
					data={parse} />
				{this.state && this.state.value ? <Hint value={this.state.value} /> : null}
			</FlexibleXYPlot>
		);
	}

	private remaining(): JSX.Element {
		const parse = this.props.data.getStatus();

		if (parse[0].length <= 1) {
			return (
				<p style={{ padding: 10, opacity: 0.5 }}> More than 24 hours of data is required to display a chart. </p>
			);
		}

		const COLOUR: { title: string; color: string, strokeStyle?: string }[] = [
			{ title: 'Open', color: '#3f9f2d' }, { title: 'In Progress', color: '#2d3b9f', strokeStyle: 'dashed'}, {title: 'Closed', color: '#d1292a' }];

		return (
			<>
				<FlexibleXYPlot
				xType='time'
				height={300}>
					<DiscreteColorLegend orientation="horizontal" width={300} items={COLOUR} />
					<HorizontalGridLines style={{ stroke: 'rgba(255, 255, 255, 0.1)' }} />
					<XAxis title='Time' />
					<YAxis title={'Tickets Open'} />
					{parse.map((i, idx) => <LineSeries key={COLOUR[idx].title} data={i} stroke={COLOUR[idx].color} />)}
				</FlexibleXYPlot>
				<div style={{ height: 50 }}></div>
			</>
		);
	}

	private readonly forgetValue: () => void = (): void => {
		this.setState({ value: null });
	}

	private readonly rememberValue: (value: number) => void = (value: number): void => {
		this.setState({ value });
	}

	private history(): JSX.Element {
		const logs = this.props.data.logs.map(i => {
			const ticket = this.props.data.tickets[i.ticketId];
			const points = i.type === LogKind.SPRINTED ?
				i.kind === 'added' ? `+${ticket.weight}` : `${ticket.weight}` :
				LogKind.WEIGHT === i.type ? i.value : '';

			let message = 'The ticket was added to the sprint';
			let completed = '';

			if (i.type === LogKind.SPRINTED && i.kind !== 'added') {
				message = 'The ticket was removed from the sprint';
			} else if (i.type === LogKind.WEIGHT) {
				message = 'The ticket was reweighted';
			} else if (i.type === LogKind.STATUS) {
				message = 'The ticket was moved to status ' + i.value;
				completed = i.value === 'closed' ? `+${ticket.weight}` :
					i.value !== 'closed' && ticket.status === 'closed' ? `-${ticket.weight}` : '';
			}

			return (
				<tr key={i.ticketId+i.kind+i.value}>
					<td>{ticket.id}</td>
					<td>
						{message}
					</td>
					<td>
						{points}
					</td>
					<td>
						{completed}
					</td>
				</tr>
			);
		});

		return (
			<table className={styles.quickTable} style={{ width: '100%' }}>
				<thead>
					<tr>
						<td> Ticket Id </td>
						<td> Description </td>
						<td style={{ maxWidth: 100 }}> Available Story Points </td>
						<td style={{ maxWidth: 100 }}> Completed Story Points </td>
					</tr>
				</thead>

				<tbody>
					{logs}
				</tbody>
			</table>
		)
	}
}

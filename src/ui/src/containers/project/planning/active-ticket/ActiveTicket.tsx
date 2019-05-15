import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../../state';
import { ITicket } from '../../../../util/models/Issue';

import * as styles from './ActiveTicket.scss';
import { Spinner } from '@streamjar/ui-react';

export interface IActiveTicketProps {
	ticket: ITicket | null;
}

class ActiveTicket extends React.PureComponent<IActiveTicketProps> {
	public render(): JSX.Element {
		if (!this.props.ticket) {
			return <Spinner />;
		}
		return (
			<div className={styles.ticket}>
				<h5> <strong>{this.props.ticket.id}</strong>: {this.props.ticket.title} </h5>
				<div style={{ padding: '15px 0px', color: '#FFF' }} dangerouslySetInnerHTML={{ __html: this.props.ticket.body }}></div> { /* tslint:disable-line */}
			</div>
		);
	}
}

function mapStateToProps(state: IState): IActiveTicketProps {
	return {
		ticket: state.planning.currentTicket ?
			state.project.entities.tickets[`${state.project.activeProject}-${state.planning.currentTicket}`] : null,
	};
}

// tslint:disable-next-line
export default connect(mapStateToProps)(ActiveTicket);

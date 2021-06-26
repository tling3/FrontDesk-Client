import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertDateTime } from '../../../Shared/Utility';
import { getSessions } from '../../../Actions';

class SessionList extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    renderSessionList() {
        if (!this.props.sessions.length > 0) {
            return <div>There are not any classes scheduled for today.</div>
        } else {
            return this.props.sessions.map(session => {
                return (
                    <div className="ui one column grid" key={session.id}>
                        <div className="column">
                            <Link to={`/session/members/${session.id}`} className="ui fluid card">
                                <div className="content">
                                    <div className="header">{session.ageLevel} {session.sessionType} {session.sessionLevel}</div>
                                </div>
                                <div className="content">
                                    <div className="description">
                                        <p>{convertDateTime(session.startTime)} to {convertDateTime(session.endTime)} with {session.instructor}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Classes</h2>
                {this.renderSessionList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { sessions: Object.values(state.sessions) };
}

export default connect(mapStateToProps, { getSessions })(SessionList);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getSessions from '../../../Actions'

class SessionList extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    convertDatetime(datetime) {
        return new Date(datetime)
            .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    renderSessionList() {
        console.log(this.props.sessions);
        return this.props.sessions.map(session => {
            return (
                <div className="ui one column grid" key={session.id}>
                    <div className="column">
                        <Link to={`/session/view/${session.id}`} className="ui fluid card">
                            <div className="content">
                                <div className="header">{session.ageLevel} - {session.sessionType} {session.sessionLevel}</div>
                            </div>
                            <div className="content">
                                <div className="description">
                                    <p>{this.convertDatetime(session.startTime)} to {this.convertDatetime(session.endTime)} with {session.instructor}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            );
        });
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
    return {
        sessions: state.sessions
    };
}

export default connect(mapStateToProps, { getSessions })(SessionList);

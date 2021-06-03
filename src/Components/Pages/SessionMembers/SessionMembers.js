import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertDateTime } from '../../../Shared/Methods';
import { getSession } from '../../../Actions';

class SessionMembers extends React.Component {
    componentDidMount() {
        this.props.getSession(this.props.match.params.id);
    }

    render() {
        const { session } = this.props;

        if (!session)
            return <p>Loading...</p>;
        return (
            <div>
                <Link to="/" className="medium ui basic button" style={{ marginBottom: "5%" }}>
                    <i className="left chevron icon"></i>
                    Back
                </Link>
                <div style={{ marginBottom: "5%" }}>
                    <h1>{session.ageLevel} {session.sessionType} {session.sessionLevel}</h1>
                    <h3>{convertDateTime(session.startTime)} to {convertDateTime(session.endTime)} with {session.instructor}</h3>
                </div>
                <Link to={`/session/member/search/${this.props.match.params.id}`} className="large ui basic labeled icon button" style={{ marginBottom: "5%" }}>
                    <i className="user plus icon"></i>
                    Add Member
                </Link>
                <div className="ui segment">
                    <div className="ui top attached label">Enrolled Members</div>
                    <div className="ui relaxed divided list">
                        <div className="item">
                            <i className="large github middle aligned icon" />
                            <div className="content">
                                <div className="header">Header</div>
                                <div className="description">This is a longer description.</div>
                            </div>
                        </div>
                        <div className="item">
                            <i className="large github middle aligned icon" />
                            <div className="content">
                                <div className="header">Header</div>
                                <div className="description">This is a longer description.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { session: state.sessions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getSession })(SessionMembers);

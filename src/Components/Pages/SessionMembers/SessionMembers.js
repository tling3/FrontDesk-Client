import React from 'react';
import { connect } from 'react-redux';
import { getSession } from '../../../Actions';
import { convertDateTime } from '../../../Shared/Methods';
import { Link } from 'react-router-dom';

class SessionMembers extends React.Component {
    componentDidMount() {
        console.log("mount fired");
        console.log("ID: ", this.props.match.params.id);
        this.props.getSession(this.props.match.params.id);
    }

    render() {
        console.log("render fired");
        console.log("selectecSession", this.props.selectedSession);

        const { session } = this.props;

        if (!session)
            return <p>Loading...</p>
        return (
            // remove all these br's
            <div>
                <Link to="/" className="medium ui basic button">
                    <i className="left chevron icon"></i>
                    Back
                </Link>
                {/* brs need to be CSS - probably %s */}
                <br />
                <br />
                <br />
                <div>
                    <h1>{session.ageLevel} {session.sessionType} {session.sessionLevel}</h1>
                    <h3>{convertDateTime(session.startTime)} to {convertDateTime(session.endTime)} with {session.instructor}</h3>
                </div>
                <br />
                <br />
                <br />
                <Link to="/" className="large ui basic labeled icon button">
                    <i className="user plus icon"></i>
                    Add Member
                </Link>
                <br />
                <br />
                <br />
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
    console.log(state);
    return { session: state.sessions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getSession })(SessionMembers);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertDateTime, getTodayDate } from '../../../Shared/Utility';
import { getSession, getAttendanceDto, purgeAttendanceDto } from '../../../Actions';

class SessionMembers extends React.Component {
    componentDidMount() {
        this.props.getSession(this.props.match.params.id);
        this.props.getAttendanceDto(this.props.match.params.id, getTodayDate());
    }

    componentWillUnmount() {
        this.props.purgeAttendanceDto();
    }

    mapMembers() {
        if (!this.props.attendanceDto.length > 0) {
            return <div>No currently enrolled members.</div>
        }
        else {
            return (
                this.props.attendanceDto.map(member => {
                    return (
                        <div className="item" key={member.id}>
                            <i className="large github middle aligned icon" />
                            <div className="content">
                                <div className="header">{member.firstName} {member.lastName}</div>
                                <div className="description"></div>
                            </div>
                        </div>
                    );
                })
            );
        }
    }

    renderMemberList() {
        return (
            <div className="ui segment">
                <div className="ui top attached label">Enrolled Members</div>
                <div className="ui relaxed divided list">
                    {this.mapMembers()}
                </div>
            </div>
        );
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
                {this.renderMemberList()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        session: state.sessions[ownProps.match.params.id],
        attendanceDto: Object.values(state.attendanceDto)
    };
}

export default connect(mapStateToProps, { getSession, getAttendanceDto, purgeAttendanceDto })(SessionMembers);

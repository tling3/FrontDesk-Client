import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../../Shared/Modal';
import { getMembers, insertAttendance } from '../../../Actions';
import { getTodayDate } from '../../../Shared/Utility';

class MemberSearch extends React.Component {
    state = {
        searchText: "",
        searchResults: []
    };

    onSubmit(event) {
        event.preventDefault();
    }

    componentDidMount() {
        this.props.getMembers();
    }

    componentWillUnmount() {
        this.setState({ searchText: "" });
    }

    onInputChange(event) {
        var searchResults = this.props.members.filter(([key, value]) => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({ searchResults, searchText: event.target.value });
    }

    insertMember(memberId) {
        var today = getTodayDate();
        this.props.insertAttendance(memberId, this.props.match.params.id, today);
    }

    mapMembers = () => {
        if (this.state.searchText === "") {
            return <div>Please search for a member.</div>
        } else if (this.state.searchText !== "" && this.state.searchResults.length === 0) {
            return <div>Member not found.</div>
        } else {
            return this.state.searchResults.map(member => {
                var name = member[1];
                var memberId = member[0]
                return (
                    <div className="item" key={memberId}>
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <div style={{ cursor: "pointer" }} onClick={() => this.insertMember(memberId)}>
                                <div className="header">{name}</div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    renderMemberList = () => {
        return (
            <div className="ui segment">
                <div className="ui top attached label">Members</div>
                <div className="ui relaxed divided list">
                    {this.mapMembers()}
                </div>
            </div>
        );
    }

    renderSearchInput() {
        return (
            <div style={{ height: "500px" }} >
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="field">
                                <label>Member Search</label>
                                <div className="ui icon input">
                                    <input type="text" placeholder="Search..." value={this.state.searchText} onChange={event => this.onInputChange(event)}></input>
                                    <i className="circular search icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {this.renderMemberList()}
            </div>
        );
    }

    render() {
        return (
            <Modal sessionId={this.props.match.params.id}>
                {this.renderSearchInput()}
            </Modal>
        );
    }
}

const createFullNames = (members) => {
    return members.map(member => ([member.id, (member.firstName + " " + member.lastName)]));
}

const mapStateToProps = state => {
    return { members: createFullNames(Object.values(state.members)) };
}

export default connect(mapStateToProps, { getMembers, insertAttendance })(MemberSearch);

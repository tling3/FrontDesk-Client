import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getMembers, insertAttendance } from '../../../Actions';
import Modal from '../../../Shared/Modal';

class MemberSearch extends React.Component {
    state = {
        searchText: "",
        fullNamesList: [],
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
        this.props.insertAttendance(memberId, this.props.match.params.id);
    }

    mapMembers = () => {
        if (this.state.searchText !== "" && this.state.searchResults.length > 0) {
            return this.state.searchResults.map(member => {
                var name = member[1];
                var memberId = member[0]
                return (
                    <div className="item" key={memberId}>
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            {/* <Link to={`/session/members/${this.props.match.params.id}`} onClick={() => this.insertMember(memberId)}> */}
                            <a onClick={() => this.insertMember(memberId)}>
                                <div className="header">{name}</div>
                                <div className="description">some text</div>
                            </a>
                            {/* </Link> */}
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
            <div>
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
        return this.renderSearchInput();
    }
}

const createFullNames = (members) => {
    return members.map(member => ([member.id, (member.firstName + " " + member.lastName)]));
}

const mapStateToProps = state => {
    return { members: createFullNames(Object.values(state.members)) };
}

export default connect(mapStateToProps, { getMembers, insertAttendance })(MemberSearch);

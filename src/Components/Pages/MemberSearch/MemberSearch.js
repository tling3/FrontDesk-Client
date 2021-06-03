import React from 'react';
import _ from 'lodash';
import Modal from '../../../Shared/Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMembers } from '../../../Actions';

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

    componentDidUpdate() {
        if (this.state.fullNamesList.length === 0)
            this.createFullNameListState();
    }

    componentWillUnmount() {
        this.setState({ searchText: "" })
    }

    createFullNameListState() {
        var fullNamesList = this.props.members.map(member => ([member.id, (member.firstName + " " + member.lastName)]));
        this.setState({ fullNamesList });
    }

    onInputChange(event) {
        var searchResults = this.state.fullNamesList.filter(([key, value]) => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({ searchResults, searchText: event.target.value });
    }

    testMethod(memberId) {
        console.log("onClick memberId", memberId);
        console.log("class id match params", this.props.match.params.id)
    }

    mapMembers = () => {
        if (this.state.searchText != "" && this.state.searchResults.length > 0) {
            return this.state.searchResults.map(member => {
                var name = member[1];
                var memberId = member[0]
                return (
                    <div className="item" key={memberId}>
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <Link to={`/session/members/${this.props.match.params.id}`} onClick={() => this.testMethod(memberId)}>
                                <div className="header">{name}</div>
                                <div className="description">some text</div>
                            </Link>
                        </div>
                    </div>
                );
            })
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
        console.log("props", this.props);
        return this.renderSearchInput();
    }
}

const mapStateToProps = state => {
    return { members: Object.values(state.members) };
}

export default connect(mapStateToProps, { getMembers })(MemberSearch);

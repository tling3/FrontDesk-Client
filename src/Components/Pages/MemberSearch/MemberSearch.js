import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getMembers } from '../../../Actions';
import Modal from '../../../Shared/Modal';

class MemberSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            fullNamesList: [],
            searchResults: []
        };

        // console.log("constructor state: ", this.state);
    }

    onSubmit(event) {
        console.log("onSubmit fired");
        event.preventDefault();
    }

    componentDidMount() {
        console.log("componentDidMount fired");
        this.props.getMembers();
    }

    // componentDidUpdate() {
    //     console.log("update");
    //     console.log("this.state.fullNamesList.length", this.state.fullNamesList.length);
    //     if (this.state.fullNamesList.length === 0) {
    //         // console.log("did update fired");
    //         this.createFullNameListState();
    //     }
    // }

    createFullNameListState = () => {
        // console.log("createFullNameListState fired");
        var fullNamesList = this.props.members.map(member => ([member.id, (member.firstName + " " + member.lastName)]));
        // this.setState({ fullNamesList });
        // console.log("after settting fullnames: ", this.state.fullNamesList);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount fired");
        this.setState({ searchText: "" });
    }

    onInputChange(event) {
        // console.log("onInputChange fired");
        var searchResults = this.state.fullNamesList.filter(([key, value]) => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({ searchResults, searchText: event.target.value });
    }

    testMethod(memberId) {
        console.log("testMethod fired");
        console.log("onClick memberId", memberId);
        console.log("class id match params", this.props.match.params.id);
    }

    mapMembers = () => {
        console.log('mapMembers fired');
        if (this.state.searchText !== "" && this.state.searchResults.length > 0) {
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
            });
        }
    }

    renderMemberList = () => {
        console.log('renderMemberList fired');
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
        console.log('renderSearchInput fired');
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
        console.log('render fired');
        // console.log("state at render: ", this.state);
        // console.log("props at render: ", this.props);
        return this.renderSearchInput();
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps fired");
    return { members: Object.values(state.members) };
}

export default connect(mapStateToProps, { getMembers })(MemberSearch);

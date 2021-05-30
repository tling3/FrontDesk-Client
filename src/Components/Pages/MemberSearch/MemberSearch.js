import React from 'react';
import _ from 'lodash';
import Modal from '../../../Shared/Modal';
import { connect } from 'react-redux';
import { getMembers, getSearchText } from '../../../Actions';

class MemberSearch extends React.Component {

    state = {
        searchText: "",
        fullNamesList: [],
        searchResults: []
    };

    componentDidMount() {
        this.props.getMembers();
    }

    componentDidUpdate() {
        if (this.state.fullNamesList.length === 0) {
            this.createFullNameListState();
        }
    }

    componentWillUnmount() {
        // this.props.getSearchText("");
        this.setState({ searchText: "" })
    }

    createFullNameListState() {
        var fullNamesList = this.props.members.map(member => ([member.id, (member.firstName + " " + member.lastName)]));
        this.setState({ fullNamesList });
    }

    onInputChange(event) {
        var searchResults = this.state.fullNamesList.filter(([key, value]) => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        // you may want to convert this to component level state
        // this.props.getSearchText(event.target.value);
        this.setState({ searchText: event.target.value });
        this.setState({ searchResults });
        console.log("searchText", event.target.value);
        console.log("searchResults", searchResults);
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

    mapMembers = () => {
        // change search text to state
        // if (this.props.searchText != "" & this.state.searchResults.length > 0) {
        if (this.state.searchText != "" & this.state.searchResults.length > 0) {
            return this.state.searchResults.map(member => {
                console.log("member", member);
                var name = member[1];
                return (
                    <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <div className="header">{name}</div>
                        </div>
                    </div>
                );
            })
        }
    }

    onSubmit(event) {
        event.preventDefault();
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
        console.log("search text in render", this.props.searchText);
        return (
            this.renderSearchInput()
        );
    }
}

const mapStateToProps = state => {
    console.log("map state fired");
    return {
        members: Object.values(state.members)
        // searchText: state.searchText
    };
}

// export default connect(mapStateToProps, { getMembers, getSearchText })(MemberSearch);
export default connect(mapStateToProps, { getMembers })(MemberSearch);

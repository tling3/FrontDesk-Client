import React from 'react';
import _ from 'lodash';
import Modal from '../../../Shared/Modal';
import { connect } from 'react-redux';
import { getMembers, getSearchText } from '../../../Actions';

class MemberSearch extends React.Component {

    state = { fullNamesList: [] };

    componentDidMount() {
        this.props.getMembers();
    }

    componentDidUpdate() {
        if (this.state.fullNamesList.length === 0) {
            this.createFullNameListState();
        }
    }

    onInputChange(event) {
        // you may want to convert this to component level state
        this.props.getSearchText(event.target.value);
        // var filteredNames = this.state.fullNamesList.filter(member => member.includes(event.target.value.toLowerCase()));
        // console.log("filteredNames", filteredNames);

        var objArray = this.props.members[0];
        console.log("objArray", objArray);
        var objArrayEntries = []
        for (let j = 0; j < objArray.length; j++) {
            objArrayEntries.push(Object.entries(objArray[j]))
        }
        console.log("objArrayEntries", objArrayEntries);

        var results = []
        var KVpairsArry1 = objArrayEntries[0]
        console.log("KVpairsArry1", KVpairsArry1);


        results = KVpairsArry1.filter(([key, value]) => String(value).toLowerCase().includes(event.target.value.toLowerCase()));
        console.log("results", results);
    }

    createFullNameListState() {
        console.log("members state: ", this.props.members);
        var fullNamesList = this.props.members.map(member => (member.firstName + " " + member.lastName).toLowerCase());
        this.setState({ fullNamesList });


        var objArray = this.props.members[0];
        console.log("objArray", objArray);
        var objArrayEntries = []
        for (let j = 0; j < objArray.length; j++) {
            objArrayEntries.push(Object.entries(objArray[j]))
        }
        console.log("objArrayEntries", objArrayEntries);
        // var results = objArrayEntries.filter(([key, value]) => value.includes(event.target.value.toLowerCase()));
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
                                    <input type="text" placeholder="Search..." value={this.props.searchText} onChange={event => this.onInputChange(event)}></input>
                                    <i className="circular search icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    render() {
        return (
            this.renderSearchInput()
        );
    }
}

const mapStateToProps = state => {
    return {
        members: Object.values(state.members),
        searchText: state.searchText
    };
}

export default connect(mapStateToProps, { getMembers, getSearchText })(MemberSearch);

import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../History';
import Header from '../Shared/Header';
import SessionList from './Pages/SessionList/SessionList';
import SessionMembers from './Pages/SessionMembers/SessionMembers';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={SessionList}></Route>
                    <Route path="/session/members/:id" exact component={SessionMembers}></Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
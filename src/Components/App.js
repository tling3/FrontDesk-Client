import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import history from '../History';
import Header from '../Shared/Header';
import SessionList from './Pages/SessionList/SessionList';
import SessionShow from './Pages/SessionShow/SessionShow';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={SessionList}></Route>
                    <Route path="/session/view/:id" exact component={SessionShow}></Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
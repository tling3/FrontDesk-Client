import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../Shared/Header';

const PageOne = () => {
    return (
        <div>
            Page One
            <br />
            <Link to="/pagetwo">To Page Two</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            Page Two
            <br />
            <Link to="/">To Page One</Link>
        </div>
    );
}

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
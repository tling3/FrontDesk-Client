import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="ui header item">FrontDesk</Link>
        </div>
    );
}

export default Header;


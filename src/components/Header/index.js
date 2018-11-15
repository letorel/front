import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

/* class Card extends React.Component {
    constructor() {

    }

    render() {
        return (
            <div className="card">
                <h1>{props.title}</h1>
                <img src={props.image} alt="country" />
                <p>{props.price}</p>
            </div>
        )
    }
} */

const Header = (props) => (
    <div className="header">
        <NavLink
            to="/details"
            activeStyle={{
                fontWeight: 'bold',
                color: 'red',
            }}
        >
            Details
        </NavLink>
        <NavLink
            exact
            to="/"
            activeStyle={{
                fontWeight: 'bold',
                color: 'red',
            }}
        >
            Home
        </NavLink>
    </div>
);

export default Header;

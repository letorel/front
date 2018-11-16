import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/logo.jpg';

import './style.less';

const activeStyle = {
  fontWeight: 'bold',
  color: 'blue',
};
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

const Header = () => (
  <div className="header">
    <Link
      to="/"
      className="logo"
    >
      <img
        src={logoImg}
        alt="logo"
      />
    </Link>
    <div className="navbar-container">
      <div className="navbar">
        <NavLink
          exact
          to="/"
          activeStyle={activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/link1"
          activeStyle={activeStyle}
        >
          Lien 1
        </NavLink>
        <NavLink
          to="/link2"
          activeStyle={activeStyle}
        >
          Lien 2
        </NavLink>
        <NavLink
          to="/link3"
          activeStyle={activeStyle}
        >
          Lien 3
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;

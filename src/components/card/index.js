import React from 'react';

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

const Card = (props) => (
    <div className="card">
        <h1>{props.title}</h1>
        <img src={props.image} alt="country" />
        <p>{props.price}</p>
    </div>
);

export default Card;
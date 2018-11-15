import React from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

/* function handleClick(e) {
    e.preventDefault();
    console.log('The card was clicked.');
} */

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img id={props.id} src={props.image} alt="country" onClick={props.handleClick}/>
            <p>{props.price}</p>
            <img
                src="https://www.reves-doceans.fr/wp-content/uploads/2018/05/Image-Coup-de-pouce-01.jpg"
                alt="thumbLogo" 
                onClick={props.handleThumbClick}
            />
        </div>
    );
}

export default Card;
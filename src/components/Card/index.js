import React from 'react';
import { Redirect } from 'react-router-dom';

import './style.less';

/* function handleClick(e) {
    e.preventDefault();
    console.log('The card was clicked.');
} */

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <img id={props.id} src={props.image} alt="country" onClick={props.handleClick}/>
      <footer>
        <span className="price">{props.price}$</span>
        <img
          src="https://www.reves-doceans.fr/wp-content/uploads/2018/05/Image-Coup-de-pouce-01.jpg"
          alt="thumbLogo"
          onClick={props.handleThumbClick}
        />
        <span className="like">10</span>
      </footer>
    </div>
  );
}

export default Card;

import React from 'react';
import { Redirect } from 'react-router-dom';

import './style.less';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleThumbClick = this.handleThumbClick.bind(this);
  }

  handleThumbClick() {
    const counter = this.state.counter + 1;
    this.setState({ counter });
  }

  render() {
    const {
      title,
      id,
      image,
      price,
      handleClick,
    } = this.props;
    return (
      <div className="card">
        <h1>{title}</h1>
        <img id={id} src={image} alt="country" onClick={handleClick}/>
        <footer>
          <span className="price">{price}$</span>
          <img
            src="https://www.reves-doceans.fr/wp-content/uploads/2018/05/Image-Coup-de-pouce-01.jpg"
            alt="thumbLogo"
            onClick={this.handleThumbClick}
          />
          <span className="like">{this.state.counter}</span>
        </footer>
      </div>
    );
  }
}

export default Card;

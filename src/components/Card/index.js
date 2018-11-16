import React from 'react';
import PropTypes from 'prop-types';

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
    const { counter: lastCounter } = this.state;
    this.setState({ counter: lastCounter + 1 });
  }

  render() {
    const {
      title,
      id,
      image,
      price,
      handleClick,
    } = this.props;
    const {
      counter,
    } = this.state;

    return (
      <div className="card">
        <h1>{title}</h1>
        <img id={id} src={image} alt="country" onClick={handleClick} />
        <footer>
          <span className="price">{price}$</span>
          <img
            src="https://www.reves-doceans.fr/wp-content/uploads/2018/05/Image-Coup-de-pouce-01.jpg"
            alt="thumbLogo"
            onClick={this.handleThumbClick}
          />
          <span className="like">{counter}</span>
        </footer>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.number,
  handleClick: PropTypes.func,
};

Card.defaultProps = {
  title: 'Title',
  id: 0,
  image: '',
  price: 0,
  handleClick: () => {},
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// import fakeData from '../../config/fakeData.json';
import './style.less';

const getLastURLParams = (url) => {
    const id = url[url.length - 1];
    return id;
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const id = getLastURLParams(location.pathname.split('/'));
    axios.get(`http://localhost:3016/trip/${id}`)
    .then((response) => {
      const { data } = response.data;
      this.setState({ trip: data });
    })
    .catch(() => this.setState({ trip: {} }));
  }

  render() {
    const { trip } = this.state;
    return Object.keys(trip).length !== 0
      ? (
        <div className="details">
          <h1>
            {trip.title}
          </h1>
          <img
            src={trip.image}
            alt="country"
          />
          <footer>
            <p className="price">
              Price: {trip.price}$
            </p>
          </footer>
        </div>
      )
      : (
        <div className="details">
          <p>
            No data to display
          </p>
        </div>
      );
  }
}

Details.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Details;

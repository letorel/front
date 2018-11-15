import React from 'react';
import axios from 'axios';

import fakeData from '../../config/fakeData.json';
import './style.less';

const getLastURLParams = (url) => {
    const id = url[url.length-1];
    return id;
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    const id = getLastURLParams(props.location.pathname.split('/'));
    console.log(id, props)
    this.state = {
      trip: fakeData[id],
    }
  };

  componentDidMount() {
    // const id = getLastURLParams(this.props.location.pathname.split('/'));
    // axios.get(`http://localhost:3016/trip/${id}`)
    // .then((response) => {
    //   const { data } = response.data;
    //   this.setState({trip : data});
    // })
    // .catch((error) => console.log(error));
  }

  render() {
    return Object.keys(this.state.trip).length !== 0
      ? (
        <div className="details">
          <h1>
            {this.state.trip.title}
          </h1>
          <img
            src={this.state.trip.image}
            alt="country"
          />
          <footer>
            <p className="price">
              Price: {this.state.trip.price}$
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

export default Details;

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// import fakeData from '../../config/fakeData.json';
import Card from '../Card';
import './style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripList: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3016/trip')
    .then((response) => {
        const { data } = response.data;
        this.setState({ tripList: data });
    })
    .catch(() => this.setState({ tripList: [] }));
  }

  handleClick(e) {
    const { history } = this.props;
    history.push(`/details/${e.currentTarget.id}`);
  }

  render() {
    const { tripList } = this.state;
      return (
        <div className="home">
          {
            tripList.length !== 0
              ? tripList.map(data => (
                <Card
                  key={data.id}
                  handleClick={this.handleClick}
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  image={data.image}
                />
              ))
            : 'No data to display'
          }
        </div>
      );
    }
  }

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;

import React from 'react';
import axios from 'axios';

import Card from '../Card';
/* import fakeData from '../../config/fakeData.json'; */
import './style.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            tripList: [
                /* {
                    "title": "Grece",
                    "price": 350,
                    "image": "https://img-4.linternaute.com/-6ZSS_niygj0fM3DgK5HdFSdc3k=/1240x/smart/11c68cc2e0d04c1d936baf0c2de3ea65/ccmcms-linternaute/10666064.jpg"
                }, */
            ],
            counter: 0,
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleThumbClick=this.handleThumbClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3016/trip')
        .then((response) => {
            const { data } = response.data;

            this.setState({tripList : data});
        })
        .catch((error) => console.log(error));
    }

    handleClick(e) {
        console.log(this);
        /* window.location.replace(`/details/${e.currentTarget.id}`); */
        this.props.history.push(`/details/${e.currentTarget.id}`);
    }

    handleThumbClick() {
        this.setState({counter: this.state.counter+1});
        /* console.log(this.state.counter); */
    }

    render() {
        return (
            <div className="home">
                <p>{this.state.counter}</p>
                {
                    this.state.tripList.length !== 0
                    ? this.state.tripList.map((data) => {
                        return <Card
                            handleClick={this.handleClick}
                            handleThumbClick={this.handleThumbClick}
                            id={data.id}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                        />
                    })
                    : 'No data to display'
                }
            </div>
        )
    }
}

/* const Home = (props) => (
    <div className="home">
        {fakeData.map((data) => {
            return <Card
                title={data.title}
                price={data.price}
                image={data.image}
            />
        })}
    </div>
); */

export default Home;

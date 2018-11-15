import React from 'react';
import axios from 'axios';

const getLastURLParams = (url) => {
    const id = url[url.length-1];
    return id;
};

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {}
        }
    };

    componentDidMount() {
        const id = getLastURLParams(this.props.location.pathname.split('/'));
        axios.get(`http://localhost:3016/trip/${id}`)
        .then((response) => {
            const { data } = response.data;
            this.setState({trip : data});
        })
        .catch((error) => console.log(error));
    }
    
    render() {
        console.log(Object.keys(this.state.trip));
        return Object.keys(this.state.trip).length !== 0
        ?
        (
            <div className="details">
                <h1>{this.state.trip.title}</h1>
                <img src={this.state.trip.image} alt="country" />
                <p>{this.state.trip.price}</p>
            </div>
        )
        :
        'Nodata to display';
    }
}

export default Details;
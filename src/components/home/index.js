import React from 'react';
import Card from '../card';
import fakeData from '../../config/fakeData.json';
import './style.css';

const Home = (props) => (
    <div className="home">
        {fakeData.map((data) => {
            return <Card 
                title={data.title}
                price={data.price}
                image={data.image}
            />
        })}
    </div>
);

export default Home;
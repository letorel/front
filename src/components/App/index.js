import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import Details from '../Details';

const App = () => {
    /* console.log(props); */
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/details' component={Details}/>
            </Switch>
        </div>
    );
};

export default App;
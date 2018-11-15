import React from 'react';
import Header from '../header';
import Home from '../home';
import Details from '../details';
import { Route, Switch } from 'react-router-dom';

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
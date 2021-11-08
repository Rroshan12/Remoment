import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';


function App() {

    return (
        <BrowserRouter>
        <Navigation />
            <Switch>
                <Route path='/' exact component={() => <Redirect to='/activities' />} />
                <Route path='/activities' exact component={Home} />
              
            </Switch>
        </BrowserRouter>
    )
}

export default App

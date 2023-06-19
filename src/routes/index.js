import React from 'react';
import Home from '../pages/Home';
import Company from '../pages/Company';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

 function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/quem-somos" exact component={Company}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
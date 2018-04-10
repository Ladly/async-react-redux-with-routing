import React, { Component, Fragment } from 'react' 
import { Route, Switch, Link } from "react-router-dom";

import Statefull from './Containers/Statefull/Statefull'
import HomePage  from './Containers/HomePage'
import ShowsPage  from './Containers/ShowsPage'
import { Nav } from './Components/Nav'



export const App = () => {
    
    return (
        <Fragment>
            <Nav />
            <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/showspage" component={ShowsPage}/>
            <Route path="/statefull" component={Statefull}/>
            </Switch>
            <HomePage /> 
        </Fragment>
    )
}


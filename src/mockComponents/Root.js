import React from 'react'
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'



import Stores from './Stores'
import SingleStore from './SingleStore'


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


const CmRouter = () => (
  <Router>
        <div>

            <hr/>

            <Switch>
                <Route exact path="/" component={Stores}/>
            
                <Route path="/singleStore/:slug" component={SingleStore}/>

				<Route component={NoMatch}/>            
            </Switch>

        </div>
    </Router>
)



const Root = () => (
  <CmRouter></CmRouter>
)

export default Root

import React from 'react'
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'



import Stores from './components/Stores/index.js'
import SingleStore from './components/Stores/SingleStore.js'
import AddStore from './components/Stores/AddStore.js'
import Test from './components/Stores/Test.js'


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


const CmRouter = () => (
  <Router>
        <div>
            <ul>
                <li><Link to="/">all stores</Link></li>
                <li><Link to="/add">add new store</Link></li>
            </ul>

            <hr/>

            <Switch>
                <Route exact path="/" component={Stores}/>
            
                <Route path="/singleStore/:slug" component={SingleStore}/>

                <Route
                    path="/update/:slug"
                    render={(props) => ( <AddStore {...props} title="Edit"/> ) }
                />

                <Route
                    path="/add"
                    render={(props) => ( <AddStore {...props} title="Add"/> ) }
                />

          

                {/*
                    a last route to catch 404
                    <Route component={NoMatch}/>            
                */}

                {/* redirect to the store instead of a 404 */}
                <Route component={Stores}/>
            </Switch>

        </div>
    </Router>
)



const Root = () => (
  <CmRouter></CmRouter>
)

export default Root

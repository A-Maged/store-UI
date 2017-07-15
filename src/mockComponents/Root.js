import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';



import Stores from './Stores';
import SingleStore from './SingleStore';
import Item from './Item';

const NoMatch = ({ location }) => (
	<div>
		<h3>No match for <code>{location.pathname}</code></h3>
	</div>
)


const CmRouter = () => (
  <Router>
		<Switch>
			<Route exact path="/" component={Stores}/>

			<Route path="/singleStore/:storeslug/:itemId" component={Item}/>

			<Route path="/singleStore/:storeslug" component={SingleStore}/>

			<Route component={NoMatch}/>            
		</Switch>
    </Router>
)



const Root = () => (
  <CmRouter></CmRouter>
)

export default Root

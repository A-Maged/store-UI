import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Stores from './Stores';
import SingleStore from './SingleStore';
import Item from './Item';

const NoMatch = ({ location }) => (
	<h3>No match for <code>{location.pathname}</code></h3>
)

const CmRouter = () => (
	<Router>
		<div>

			<ul>
				<li><Link to="/singleStore/cm_grocery">cm grocery</Link></li>
			</ul>

			<hr/>

			<Switch>
				<Route exact path="/" component={Stores}/>
				<Route path="/singleStore/:storeslug/:itemId" component={Item}/>
				<Route path="/singleStore/:storeslug" component={SingleStore}/>
				<Route component={NoMatch}/>            
			</Switch>
			
		</div>			
	</Router>
)



const Root = () => (
  <CmRouter />
)

export default Root

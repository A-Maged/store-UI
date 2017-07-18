import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Stores from './components/Stores';
import SingleStore from './components/SingleStore';
import Item from './components/Item';
import AddStore from './components/AddStore';
import AddItem from './components/AddItem';

const NoMatch = ({ location }) => (
	<h3>No match for <code>{location.pathname}</code></h3>
)

const CmRouter = () => (
	<Router>
		<div>

			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/addStore">add store</Link></li>
				<li><Link to="/omar-store/add-item">add item</Link></li>
			</ul>

			<hr/>

			<Switch>
				<Route exact path="/" component={Stores}/>
				
				<Route path="/addStore" component={AddStore}/>
			
				<Route path="/:storeslug/add-item" component={AddItem}/>
				
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

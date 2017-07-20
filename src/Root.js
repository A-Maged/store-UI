import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Loading from './components/Loading';
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
			<Loading />
			<Nav />

			<Switch>

				{/* homePage , show all stores */}				
				<Route exact path="/" component={Stores}/>
				
				{/* add new store */}				
				<Route path="/addStore" component={AddStore}/>
			
				{/* add new item */}
				<Route path="/:storeslug/add-item" component={AddItem}/>
			
				{/* show single item */}				
				<Route path="/singleStore/:storeslug/:itemId" component={Item}/>
			
				{/* show single store*/}				
				<Route path="/singleStore/:storeslug" component={SingleStore}/>
		
				{/* 404 */}				
				<Route component={NoMatch}/>            
	
			</Switch>
		</div>			
	</Router>
)



const Root = () => (
  <CmRouter />
)

export default Root

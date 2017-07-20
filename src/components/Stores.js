import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Loading from './Loading';

const shortid = require('shortid');
const axios = require('axios');



class Stores extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stores: [],
			isFetching: true
		}


		this.renderStores = this.renderStores.bind(this);
		this.getStores = this.getStores.bind(this);
	}


    getStores(){
        var self = this

		axios.get('http://127.0.0.1:3000/api/v1/stores')
			.then(function (response) {
				self.setState({stores: response.data})
				self.setState({isFetching: false})
			})
			.catch(function (error) {
				console.log(error);
			});
    }




	renderStores(){
		return(
			this.state.stores.map(function(store) {
				return(
					<div key={shortid.generate()} className=" col-xs-11 col-sm-5 col-md-3">						
						<div className="store thumbnail ">
							<Link to={`/singleStore/${store.slug}`}>
								<img className="featured-img" src={store.featuredImg} alt=""/>
							</Link>

							<Link className="name" to={`/singleStore/${store.slug}`}>							
								<p>{store.name}</p>
							</Link>
							
							<p className="address">{store.location.address}</p>
						</div>							
					</div>
				)
			})
		)
	}
	
	componentDidMount(){
        var self = this
        self.getStores()    
	}
	

	render() {
		return (
			<div className="stores-list  container">
				{(this.state.isFetching  && (<Loading />) )}

				<div className="row ">
					{this.renderStores()}
				</div>
			</div>
		);
	}
}

export default Stores;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const shortid = require('shortid');
const axios = require('axios');



class Stores extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stores: []
		}


		this.renderStores = this.renderStores.bind(this);
		this.getStores = this.getStores.bind(this);
	}


    getStores(){
        var self = this

		axios.get('http://127.0.0.1:3000/api/v1/stores')
			.then(function (response) {
				self.setState({stores: response.data})
			})
			.catch(function (error) {
				console.log(error);
			});
    }




	renderStores(){
		return(
			this.state.stores.map(function(store) {
				return(
					<div key={shortid.generate()} className="store">
						<Link to={`/singleStore/${store.slug}`}>
							<img className="featured-img" src={store.featuredImg} alt=""/>
						</Link>

						<Link className="name" to={`/singleStore/${store.slug}`}>							
							<p>{store.name}</p>
						</Link>
						
						<p className="address">{store.location.address}</p>
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
			<div className="stores-list">
				{this.renderStores()}
			</div>
		);
	}
}

export default Stores;
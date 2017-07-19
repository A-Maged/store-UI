import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const shortid = require('shortid');
const axios = require('axios');



class Stores extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stores: []
			/*
			,stores:[
				{
					name: 			'cm grocery',
					slug: 			'cm_grocery',
					location: {
						address :	'74 New York Ave, Brooklyn, NY 11216, USA' ,
						longitude: 	40.6776989,
						latitude: 	-73.95153
					},
					featuredImg:	'http://static4.businessinsider.com/image/563cde04bd86effb5b8bcd49-2392-1794/rtr3er24.jpg',
				},
				{
					name: 			'TS shirts',
					slug: 			'TS_shirts',
					location: {
						address :	'214 E 89th St, New York, NY 10128, USA',
						longitude: 	40.780343,
						latitude: 	-73.9542264
					},
					featuredImg:	'https://imageshotfrogus.blob.core.windows.net/companies/Big-Frog-Custom-T-Shirts-in-Plantation/images/Big-Frog-Custom-T-Shirts-in-Plantation_80861_image.jpg',
				}				
			]
			*/
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
					<div key={shortid.generate()} className="store thumbnail col-xs-11 col-sm-5 col-md-3">						
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
			<div className="stores-list  container">
				<div class="row">
					{this.renderStores()}
				</div>
			</div>
		);
	}
}

export default Stores;
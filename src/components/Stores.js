import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const shortid = require('shortid');

class Stores extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stores: [
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
		}


		this.renderStores = this.renderStores.bind(this);
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
	
	render() {
		return (
			<div className="stores-list">
				{this.renderStores()}
			</div>
		);
	}
}

export default Stores;
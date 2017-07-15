import React, { Component } from 'react';

const shortid = require('shortid');

class SingleStore extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			id: 			1,
			name: 			'cm grocery',
			slug: 			'cm_grocery',
			description: 	'best grocery store in the bay area',
			location: {
				address :	'74 New York Ave, Brooklyn, NY 11216, USA' ,
				longitude: 	40.6776989,
				latitude: 	-73.95153
			},
			coverImgLink: 	'http://static4.businessinsider.com/image/563cde04bd86effb5b8bcd49-2392-1794/rtr3er24.jpg',
			catagories: 	['grocery','food'],
			hasDelivery: 	true,
			deliveryCities: ['Brooklyn', 'Queens']
		}

		this.renderCatagories = this.renderCatagories.bind(this);
		this.renderdeliveryCities = this.renderdeliveryCities.bind(this);
	}


	renderCatagories(){
		return(
			<ul className="catagories-list">
				{			
					this.state.catagories.map(function(catagory) {
						return(
							<li key={shortid.generate()}>
								{catagory}
							</li>					
						)
					})
				}
			</ul>	
		)
	}

	renderdeliveryCities(){
		if (this.state.hasDelivery == true) {
			return(
				<ul className="dlivery-cities-list">
					{
						this.state.deliveryCities.map(function(city) {
							return(
								<li key={shortid.generate()}>
									{city}
								</li>
							)
						})
					}				
				</ul>
			);
		}
	}

	render() {
		var store = this.state;

		return (
			<div className="single-store">
				<img className="cover-img" src={store.coverImgLink} alt=""/>

				<h2 className="name">{store.name}</h2>

				<p className="description">{store.description}</p>

				<p className="address">{store.location.address}</p>

				{this.renderCatagories()}

				<p className="has-delivery">has Delivery : {store.hasDelivery}</p>
				
				{this.renderdeliveryCities()}


			</div>
		);
	}
}

export default SingleStore;
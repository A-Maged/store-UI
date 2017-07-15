import React, { Component } from 'react';
import {Link} from 'react-router-dom'

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
			featuredImg:	'http://static4.businessinsider.com/image/563cde04bd86effb5b8bcd49-2392-1794/rtr3er24.jpg',
			coverImgLink: 	'http://static4.businessinsider.com/image/563cde04bd86effb5b8bcd49-2392-1794/rtr3er24.jpg',
			catagories: 	['grocery','food'],
			hasDelivery: 	true,
			deliveryCities: ['Brooklyn', 'Queens'],
			items:[
				{
					id:				1,
					name: 			'chicken1',
					price : 		22,
					featuredImg :	'http://wellnesshealthyfood.com/wp-content/uploads/2016/06/Frozen-chicken-jpg.jpg',					
				},
				{
					id:				2,
					name: 			'chicken2',
					price : 		15,
					featuredImg :	'http://wellnesshealthyfood.com/wp-content/uploads/2016/06/Frozen-chicken-jpg.jpg',					
				},
				{
					id:				3,
					name: 			'chicken3',
					price : 		42,
					featuredImg :	'http://wellnesshealthyfood.com/wp-content/uploads/2016/06/Frozen-chicken-jpg.jpg',					
				}

			]
		}

		// this bindings
		this.renderCatagories = this.renderCatagories.bind(this);
		this.renderdeliveryCities = this.renderdeliveryCities.bind(this);
		this.renderItems = this.renderItems.bind(this);
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


	renderItems(){
		var self = this;
		return(
			<ul className="items-list">
			{
				this.state.items.map(function(item) {
					return(
						<div key={shortid.generate()} >
		
						<Link to={`/singleStore/${self.props.match.params.storeslug}/${item.id}`}>
							<img className="featured-img" src={item.featuredImg} alt=""/>
						</Link>
							
							<p className="name">
								<Link to={`/singleStore/${self.props.match.params.storeslug}/${item.id}`}>
									{item.name}							
								</Link>
							</p>

							<p className="price">{item.price}</p>						
						</div>
					)
				})
			}
			</ul>
		);
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

				{this.renderItems()}

			</div>
		);
	}
}

export default SingleStore;
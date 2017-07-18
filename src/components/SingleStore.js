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
					price : 		42,
					featuredImg :	'http://wellnesshealthyfood.com/wp-content/uploads/2016/06/Frozen-chicken-jpg.jpg',					
				},
				{
					id:				2,
					name: 			'Whole wheat bread',
					price : 		25,
					featuredImg :	'http://www.rdeliciouskitchen.com/wp-content/uploads/2015/08/bread.jpg',					
				},
				{
					id:				3,
					name: 			'Whole-grain cheerios cereals',
					price : 		18,
					featuredImg :	'https://guideimg.alibaba.com/images/shop/2015/09/29/90/general-mills-cereals-multi-grain-cheerios-cereal-box-peanut-butter-11.3-ounce-pack-of-3_10100090.jpeg',					
				}

			]
		}

		// this bindings
		this.renderCatagories = this.renderCatagories.bind(this);
		this.renderdeliveryCities = this.renderdeliveryCities.bind(this);
		this.renderItems = this.renderItems.bind(this);
		this.handleOrder = this.handleOrder.bind(this);		
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
						<div key={shortid.generate()} className="item">
		
						<Link to={`/singleStore/${self.props.match.params.storeslug}/${item.id}`}>
							<img className="featured-img" src={item.featuredImg} alt=""/>
						</Link>
							
							<p className="name">
								<Link to={`/singleStore/${self.props.match.params.storeslug}/${item.id}`}>
									{item.name}							
								</Link>
							</p>

							<p className="price">{item.price}</p>
							<button onClick={event => self.handleOrder(event) }>add to cart</button>						
						</div>
					)
				})
			}
			</ul>
		);
	}


	handleOrder(event){
		console.log('handleOrder called')
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
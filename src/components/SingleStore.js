import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Loading from './Loading';

const shortid = require('shortid');
const axios = require('axios');


class SingleStore extends Component {
	constructor(props){
		super(props);
		this.state = {
			singleStore:{},
			isFetching: true			
		}
			
		/*	
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

		*/
	
		// this bindings
		this.renderCatagories = this.renderCatagories.bind(this);
		this.renderdeliveryCities = this.renderdeliveryCities.bind(this);
		this.renderItems = this.renderItems.bind(this);
		this.renderLocation = this.renderLocation.bind(this);
		this.handleOrder = this.handleOrder.bind(this);		
	}


	

	renderCatagories(){

		if (this.state.singleStore.catagories) {
				
			return(
				<ul className="catagories-list">
					{			
						this.state.singleStore.catagories.map(function(catagory) {
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
	}

	renderdeliveryCities(){
		if (this.state.singleStore.hasDelivery == true) {
			return(
				<ul className="dlivery-cities-list">
					{
						this.state.singleStore.deliveryCities.map(function(city) {
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
		if (this.state.singleStore.items) {
			
			return(
				<ul className="items-list">
				{
					this.state.singleStore.items.map(function(item) {
						return(
							<div key={shortid.generate()} className="item thumbnail col-xs-11 col-sm-5 col-md-3">
			
								<Link to={`/singleStore/${self.props.match.params.storeslug}/${item._id}`}>
									<img className="featured-img" src={item.featuredImg} alt=""/>
								</Link>
									
								<p className="name">
									<Link to={`/singleStore/${self.props.match.params.storeslug}/${item._id}`}>
										{item.name}							
									</Link>
								</p>

								<span className="price">{item.price}</span>
								<button className="quick-order-btn" onClick={event => self.handleOrder(event) }>add to cart</button>						
							</div>
						)
					})
				}
				</ul>
			);
		}
	}


	renderLocation(){
		var self = this;
		if(self.state.singleStore.location){
			return(
				<div>
					<p>address:  {self.state.singleStore.location.address}</p>
					<p>longitude:  {self.state.singleStore.location.longitude}</p>
					<p>latitude:  {self.state.singleStore.location.latitude}</p>
				</div>
			)
		}
	}

	handleOrder(event){
		console.log('handleOrder called')
	}


	componentDidMount(){
        var self = this
        axios.get(`http://127.0.0.1:3000/api/v1/stores/show/${self.props.match.params.storeslug}`)
            .then(function (response) {
                self.setState({singleStore: response.data})
				self.setState({isFetching: false})
			})
            .catch(function (error) {
                console.log(error);
            });
                

	}


	render() {
		var store = this.state.singleStore;
		
		
		return (
			<div className="single-store">
				{(this.state.isFetching  && (<Loading />) )}
			
				<img className="cover-img" src={store.coverImgLink} alt=""/>

				<h2 className="name">{store.name}</h2>

				<Link 	className="btn btn-success"
						to={`/${this.props.match.params.storeslug}/add-item`}>add item</Link>

				<p className="description">{store.description}</p>

				{this.renderLocation()}

				{this.renderCatagories()}

				<p className="has-delivery">has Delivery : {store.hasDelivery}</p>
				
				{this.renderdeliveryCities()}

				{this.renderItems()}

				
			</div>
		);
	}
}

export default SingleStore;
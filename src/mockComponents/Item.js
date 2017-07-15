import React, { Component } from 'react';

const shortid = require('shortid');


class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id:				1,
			storeSlug: 		'cm_grocery',
			name: 			'chicken1',
			description: 	'frozen A-Grade chicken',
			price : 		22,
			featuredImg :	'http://wellnesshealthyfood.com/wp-content/uploads/2016/06/Frozen-chicken-jpg.jpg',
			galleryImgs:	[
				'http://cdn.skim.gs/images/xtoequxqfebzez3kio3x/aspen-foods-frozen-chicken-recall',
				'http://www.smilebaba.net/wp-content/uploads/2017/05/chicken-.jpg',
				'http://www.ua.all.biz/img/ua/catalog/10811697.jpg'
			],
			catagory: 	'food',
			reviews:[ 
				{
					id:		1,
					username: 'Cm',
					data:	'this product is awsome',
					stars: 	5
				},
				{
					id:		2,
					username: 'Ts',
					data:	'tasts like **** , won\'t buy from here again',
					stars: 	0
				}						
			]

		}

		this.renderGallaryImgs = this.renderGallaryImgs.bind(this);
		this.renderReviews = this.renderReviews.bind(this);
		this.handleOrder = this.handleOrder.bind(this);
	}
	


	renderGallaryImgs(){
		return(
			<div className="gallary">
				{this.state.galleryImgs.map(function(imgLink) {
					return(
						<img key={shortid.generate()} src={imgLink} alt=""/>
					)
				})}
			</div>
		)
	}



	renderReviews(){
		return(
			<div className="reviews-list">
				{this.state.reviews.map(function(review) {
					return(
						<div key={shortid.generate()}  className="review">
							<strong className="username">
								username:   {review.username}
							</strong>

							<p className="data">review:   {review.data}</p>
							<p className="stars">stars:   {review.stars}</p>					
						</div>
					)
				})}
			</div>
		)
	}



	handleOrder(event){
		console.log('handleOrder called')
	}


	
	render() {
		var item = this.state;

		return (
			<div className="item">
				<h2>{item.name}</h2>
				<img src={item.featuredImg} alt=""/>
				<p>{item.description}</p>				
				<p>{item.price}</p>		
				{this.renderGallaryImgs()}	
				{this.renderReviews()}	

				<button onClick={event => this.handleOrder(event)}>BUY/RESERVE</button>
			</div>
		);
	}
}

export default Item;
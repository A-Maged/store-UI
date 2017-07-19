import React, { Component } from 'react';

const shortid = require('shortid');
const axios = require('axios');

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {}
			
		/*
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
		*/

		// this bindings
		this.renderGallaryImgs = this.renderGallaryImgs.bind(this);
		this.renderReviews = this.renderReviews.bind(this);
		this.handleOrder = this.handleOrder.bind(this);
	}
	


	renderGallaryImgs(){
		if (this.state.galleryImgs) {			
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
	}



	renderReviews(){
		if (this.state.reviews) {						
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
	}



	handleOrder(event){
		console.log('handleOrder called')
	}


	componentDidMount(){        
        var self = this
        axios.get(`http://127.0.0.1:3000/api/v1/stores/show/${self.props.match.params.storeslug}/${self.props.match.params.itemId}`)
            .then(function (response) {
                self.setState(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
                

	}
	
	render() {
		var item = this.state;

		return (
			<div className="item">
				<h2>name:  {item.name}</h2>
				<img src={item.featuredImg} alt=""/>
				<p>description:  {item.description}</p>				
				<p>price:  {item.price}</p>		
				{this.renderGallaryImgs()}	
				{this.renderReviews()}	

				<button className="btn btn-success"
						onClick={event => this.handleOrder(event)}>BUY/RESERVE</button>
			</div>
		);
	}
}

export default Item;
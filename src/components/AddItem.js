import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


const axios = require('axios');
const _ = require('lodash');

class AddItem extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
            fireRedirect: false,
			
			item:{
				name: 			'',
				description: 	'',
				price : 		'',
				featuredImg :	'',
				galleryImgs:	[],
				catagory: 		'',
			}
		}

		this.changeItemState = this.changeItemState.bind(this);
	}
	

	componentDidMount(){

		var self = this

		self.handleSubmit = (e) => {
			e.preventDefault();
			var self = this;

			// submit data
			axios.post(`http://127.0.0.1:3000/api/v1/stores/${self.props.match.params.storeslug}/add`, self.state.item)
				.catch(function (error) {
					console.log(error);
				});

			this.setState({ fireRedirect: true })
		}


	} // end  componentDidMount



	changeItemState( propertyPath, value){
		var tempItem = Object.assign( {}, this.state.item);

		_.set(tempItem, propertyPath, value);
		
		this.setState({ item: tempItem });
	}


	render() {
		var item = this.state.item
		return (
			<div className="add_item-container">
				<h2>add an item</h2>

				<form onSubmit={ (e) => this.handleSubmit(e) } method="post">
					<div class="input-group">			
						<input  type="text" name="name" className="form-control" placeholder="name"
								onChange={e => { this.changeItemState('name', e.target.value) }}  
								value={item.name}/>
					</div>

					<input className="form-control" type="text" name="description" placeholder="description"
							onChange={e => { this.changeItemState('description', e.target.value) }}  
							value={item.description}
					/>

					<input  className="form-control" type="text" name="price" placeholder="price"
							onChange={e => { this.changeItemState('price', e.target.value) }}  
							value={item.price}
					/>

					<input className="form-control" type="text" name="featuredImg" placeholder="featuredImg"
							onChange={e => { this.changeItemState('featuredImg', e.target.value) }}  
							value={item.featuredImg}
					/>
	{/* 
					<input className="form-control" type="text" name="galleryImgs" placeholder="galleryImgs"
							onChange={e => { this.changeItemState('galleryImgs', e.target.value) }}  
							value={item.galleryImgs}
					/>
	*/}

					<input  className="form-control" type="text" name="catagory" placeholder="catagory"
							onChange={e => { this.changeItemState('catagory', e.target.value) }}  
							value={item.catagory}
					/>

					<button>submit</button>
				</form>

				{/* redirect after submission */}
				{ this.state.fireRedirect && ( <Redirect to={`/`}/> )  }
				
			</div>
		);
	}
}

export default AddItem;
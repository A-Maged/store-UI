import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

const axios = require('axios');
const _ = require('lodash');


class AddStore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            fireRedirect: false,
            store: {
				name: 			'',
				description: 	'',
				location: {
					address :	'',
					longitude: 	'',
					latitude: 	''
				},
				featuredImg:	'',
				coverImgLink: 	'',
				catagories: 	['sssss'],
				hasDelivery: 	false,
				deliveryCities: [],
				items:[]
			}
			
        }


		this.changeStoreState = this.changeStoreState.bind(this);
    }


 

	componentDidMount(){

        var self = this
        
        self.handleSubmit = (e) => {
    		e.preventDefault();
			var self = this;

			// submit data
			axios.post('http://127.0.0.1:3000/api/v1/stores/add', self.state.store)
			.catch(function (error) {
				console.log(error);
			});

			this.setState({ fireRedirect: true })
		}

        
    } // end  componentDidMount




	changeStoreState( propertyPath, value){
		var tempStore = Object.assign( {}, this.state.store);

		_.set(tempStore, propertyPath, value);
		
		this.setState({ store: tempStore });
	}



    render() {
        var store = this.state.store;

		return (
            <div className="add_store-container">
				<h2>add a store</h2>
			
				<form onSubmit={ (e) => this.handleSubmit(e) } method="post">
                    <div className="input-group">
						<input  name="name" className="form-control"
								onChange={e => { this.changeStoreState('name', e.target.value) }}  
								value={store.name} 
                                type="text"  placeholder="name" />
                    </div>

					
					<div className="input-group">					
						<textarea name="description" className="form-control"
								onChange={e=>{ this.changeStoreState('description', e.target.value) } }  
								value={store.description} 
								placeholder="description">
						</textarea>
					</div>	
					
					
					<div className="input-group">					
						<input  name="address" className="form-control"
								onChange={e=>{ this.changeStoreState('location.address', e.target.value) } }  
								value={store.location.address} 
								type="text"  placeholder="address" />
					</div>
			
					<div className="input-group">					
						<input  name="longitude" className="form-control"
									onChange={e=>{ this.changeStoreState('location.longitude', e.target.value) } }  
									value={store.location.longitude} 
									type="number"  placeholder="longitude" />

							<input  name="latitude" className="form-control"
									onChange={e=>{ this.changeStoreState('location.latitude', e.target.value) } }  
									value={store.location.latitude} 
									type="number"  placeholder="latitude" />
					</div>
			

					<div className="input-group">					
						<input  name="featuredImg" className="form-control"
								onChange={e=>{ this.changeStoreState('featuredImg', e.target.value) } }  
								value={store.featuredImg}   
								type="text"  placeholder="featuredImg" />
					</div>

					<div className="input-group">					
						<input  name="coverImgLink" className="form-control"
								onChange={e=>{ this.changeStoreState('coverImgLink', e.target.value) } }  
								value={store.coverImgLink}   
								type="text"  placeholder="coverImgLink" />
					</div>


					<div className="input-group">					
						<input  type="checkbox"
								onChange={(e)=>{ this.changeStoreState('hasDelivery', e.target.checked)}} />
						hasDelivery
					</div>
									  
				 	<button>add</button>
                </form>


 
                {/* redirect after submission */}
                { this.state.fireRedirect && ( <Redirect to={`/`}/> )  }

				{ ()=>{
					if(this.state.fireRedirect){
						console.log('fireRedirect: ', this.state.fireRedirect )
					}
				} }

            </div>
        );
    }
}

export default AddStore;
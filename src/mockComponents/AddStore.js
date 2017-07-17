import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
const axios = require('axios');



class AddStore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            fireRedirect: false,
            store: {
				name: 			'',
				description: 	'',
				location: {
					address :	'fix me',
					longitude: 	0,
					latitude: 	0
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




	changeStoreState(property, value){
		var tempStore = Object.assign( {}, this.state.store);

		tempStore[property] = value;

		this.setState({ store: tempStore });
	}

    render() {
        var store = this.state.store;

		return (
            <div>
				<h2>add a store</h2>
				{console.log(store)}
				<form onSubmit={ (e) => this.handleSubmit(e) } method="post">
                    <div>
						<input  name="name"
								onChange={e => { this.changeStoreState('name', e.target.value) }}  
                                type="text"  placeholder="name" />
                    </div>
			
					<textarea name="description"
							  onChange={e=>{ this.changeStoreState('description', e.target.value) } }  
							  value={store.description} 
							  placeholder="description">
					</textarea>
			
					<div>
						<input  name="address"
								type="text"  placeholder="address" />
					</div>
			
					<div>
							<input  name="longitude"
									type="text"  placeholder="longitude" />

							<input  name="latitude"
									type="text"  placeholder="latitude" />
					</div>
			

					<div>
						<input  name="featuredImg"
								onChange={e=>{ this.changeStoreState('featuredImg', e.target.value) } }  
								value={store.featuredImg}   
								type="text"  placeholder="featuredImg" />
					</div>

					<div>
						<input  name="coverImgLink"
								onChange={e=>{ this.changeStoreState('coverImgLink', e.target.value) } }  
								value={store.coverImgLink}   
								type="text"  placeholder="coverImgLink" />
					</div>


					<div>
						hasDelivery
						<input type="checkbox" checked={store.hasDelivery} />
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
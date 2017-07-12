import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
const axios = require('axios');



class AddStore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            fireRedirect: false,
            name: '',
            description: '',
            slug: '',
            serverMsg: {},
        }

    }


 

	componentDidMount(){

        var self = this
        
		self.updateState = (stateObj) => {
				self.setState(stateObj)
		}        

        // populate store info in the form
        if(this.props.title == "Edit" ){
            axios.get(`http://127.0.0.1:3000/api/v1/stores/show/${this.props.match.params.slug}`)
            .then(function (response) {
                self.setState({ 
                    name: response.data.name,
                    description: response.data.description,
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        }



        self.handleSubmit = (e) => {
    		e.preventDefault();
			var self = this;

            if(this.props.title == "Add"){
                // submit data
                axios.post('http://127.0.0.1:3000/api/v1/stores/add',{
                    name: this.state.name,
                    description: this.state.description,
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else if(this.props.title == "Edit"){
                // submit data
                axios.post(`http://127.0.0.1:3000/api/v1/stores/update/${this.props.match.params.slug}`,{
                    name: this.state.name,
                    description: this.state.description,
                })
                .catch(function (error) {
                    console.log(error);
                });

            }
			this.setState({ fireRedirect: true })
			
		}

        
    } // end  componentDidMount



    render() {
        
        return (
            <div>


                {console.log(this.props)}


                <h1>{this.props.title} store</h1>

                <form onSubmit={ (e) => this.handleSubmit(e) } method="post">
                    <div>
                        <input  onChange={e=>{ this.setState({name: e.target.value }) } }  
                                value={this.state.name}   
                                type="text" name="name" placeholder="name" />
                    </div>
                  
                    <textarea onChange={e=>{ this.setState({description: e.target.value }) } }  
                              value={this.state.description} 
                              name="description" placeholder="description"></textarea>

 
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
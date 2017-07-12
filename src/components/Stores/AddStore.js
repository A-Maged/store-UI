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
            tags: [],
            serverMsg: {}
        }

    }


 

	componentDidMount(){

        var self = this

		this.updateState = (stateObj) => {
				this.setState(stateObj)
		}        


        self.handleSubmit = (e) => {
    		e.preventDefault();

			var self = this;
			// submit data
			axios.post('http://127.0.0.1:3000/api/v1/stores/add',{
				name: this.state.name,
				description: this.state.description,
				tags: this.state.tags
			})
			.catch(function (error) {
				console.log(error);
			});
			
			this.updateState({ fireRedirect: true })
			
		}

	}


    updateTags(e){

        var tempArray = this.state.tags
        tempArray.push(e.target.value)
        this.setState({tags: tempArray }) 
    }



    render() {
        
        return (
            <div>

                {console.log(this.props)}
                {this.props.custom}
                <h1>add/edit store </h1>

                <form onSubmit={ (e) => this.handleSubmit(e) } method="post">
                    <div>
                        <input onChange={e=>{ this.setState({name: e.target.value }) } }  value={this.state.name}   type="text" name="name" placeholder="name" />
                    </div>
                  
                    <textarea onChange={e=>{ this.setState({description: e.target.value }) } }  name="description" placeholder="description"></textarea>

                    <div>
                        <input  onChange={ e => this.updateTags(e) }  type="checkbox" name="tags" value="tech" id="tech" />
                        <label  htmlFor="tech">tech</label>

                        <input onChange={ e => this.updateTags(e) } type="checkbox" name="tags" value="sports" id="sports" />
                        <label htmlFor="sports">sports</label>

                        <input onChange={ e => this.updateTags(e) } type="checkbox" name="tags" value="node" id="node" />
                        <label htmlFor="node">node</label>
                    </div>
                
                    <button>add</button>
                </form>


                { this.state.fireRedirect && ( <Redirect to={'/'}/> )  }

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
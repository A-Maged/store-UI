import React, { Component } from 'react';
const axios = require('axios');

class SingleStore extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            slug : '',
            store: {}
        }
    }
    



    componentDidMount(){
        
        var self = this

        axios.get(`http://127.0.0.1:3000/api/v1/stores/show/${this.props.match.params.slug}`)
            .then(function (response) {
                self.setState({store: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
                

    }


    render() {
        return (
            <div>
                <h2>id: {this.state.store._id}</h2>
                <h2>name: {this.state.store.name}</h2>
                <h2>slug: {this.state.store.slug}</h2>
                <h2>description: {this.state.store.description}</h2>
            </div>
        );
    }
}

export default SingleStore;
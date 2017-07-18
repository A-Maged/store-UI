import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Test extends Component {
    render() {
        return (
            <div>
                { ( <Redirect to={'/add'}/> )  }

            </div>
        );
    }
}

export default Test;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Stores extends Component {

	render() {
		return (
			<div>
			<ul>
				<li><Link to="/singleStore/cm_grocery">all stores</Link></li>
			</ul>

			</div>
		);
	}
}

export default Stores;
import React, { Component } from 'react'
import ImageGallery from './ImageGallery'

class Home extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<ImageGallery />
				<hr />
			</div>
		);
	}
}

export default Home 
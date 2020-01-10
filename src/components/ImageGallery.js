import React, { Component } from 'react';
import Images from './Images'

const imageClick = () => {
	console.log('Image Clicked')
}
const photoStyle = {
	height: '300px',
	width: '500px', 
	resizeMode: 'stretch',
	border: '10px solid transparent'

}

const backgroundGallerySettings = {
	background: '#bbb',
  	opacity: '0.8',
	height: '900px',
	width: '1400px',
	margin: 'auto',
	marginTop: '40px',
	marginBottom : '40px',
	position: 'relative'
}

const thumbnailGallerySettings = {
  	position: 'absolute',
	opacity: '1',
	height: '600px',
	width: '1000px',
  	position: 'absolute',
  	top: '50%', /* poussé de la moitié de hauteur du référent */
  	transform: 'translateY(-50%)',
	left: '50%',
	marginLeft: '-500px' /* width/2 */
}

class ImageGallery extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div style={backgroundGallerySettings}>
				<div style={thumbnailGallerySettings}>
					<img src={require('../images/Image1.jpg')} style={photoStyle} onClick={imageClick}/>
					<img src={require('../images/Image2.jpg')} style={photoStyle}/>
					<img src={require('../images/Image3.jpg')} style={photoStyle}/>
					<img src={require('../images/Image4.jpg')} style={photoStyle}/>
				</div>
			</div>
		);
	}
}


export default ImageGallery
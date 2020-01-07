import React, { Component } from 'react'

class MyFooter extends Component{
	constructor(){
		super();
		this.state = {
			copyright : 'All rights reserved, 2015 Copyright.',
			email : "picard.baptiste@laposte.net"	
		}
	}
	render(){
		return(
			<div>
				Footer		    
			</div>
		);
	}
}

export default MyFooter 
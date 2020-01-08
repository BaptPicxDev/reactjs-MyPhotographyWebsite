import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

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
				<Navbar bg="light" fixed="bottom">
					<p>Footer</p>	
				</Navbar>	    
			</div>
		);
	}
}

export default MyFooter 
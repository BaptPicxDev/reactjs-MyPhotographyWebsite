import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class MyFooter extends Component{
	constructor(){
		super();
		this.state = {
			copyright : 'All rights reserved, 2015 Copyright.',
			email : "picard.baptiste@laposte.net",
			footer_style : {
				
			}	
		}
	}
	render(){
		return(
			<div className="footer">
				<Navbar fluid="True" bg="light" expand="lg" fixed="bottom">
					<Nav>{this.state.email}</Nav>
					<Nav className="ml-auto"><i>{this.state.copyright}</i></Nav>	
				</Navbar>	    
			</div>
		);
	}
}

export default MyFooter 
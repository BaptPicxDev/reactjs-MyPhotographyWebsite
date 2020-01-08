import React, { Component } from 'react'
import Home from "./Home"; 
import Contact from "./Contact"; 
import About from "./About";
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";


class MyHeader extends Component{
	constructor(){
		super();
		this.state = {
			backgroundColor : '#fff',

		}
	}
	render(){
		return(
			<div className="header">
				<Navbar fluid="True" bg="light" expand="lg">
				    <Navbar.Brand href="/">Logo</Navbar.Brand>
	  				<Navbar.Toggle aria-controls="responsive-navbar-nav" />		
  					<Navbar.Collapse id="responsive-navbar-nav">
					</Navbar.Collapse>
					<Nav>
						<Nav.Item>
					    	<Nav.Link href="/about">About</Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					    	<Nav.Link href="/contact">Contact</Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					    	<Nav.Link href="https://www.linkedin.com/in/baptiste-picard-b3a26b158">LinkedIn</Nav.Link>
					   	</Nav.Item>
					</Nav>
			    </Navbar>
				<Router>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Router>	    
			</div>
		);
	}
}

export default MyHeader 
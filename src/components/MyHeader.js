import React, { Component } from 'react'
import Home from "./Home"; 
import Contact from "./Contact"; 
import About from "./About";
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyHeader extends Component{
	constructor(){
		super();
		this.state = {
			backgroundColor : '#fff',

		}
	}
	render(){
		return(
			<div>
				<Router>
				    <div>
				        <Navbar bg="light" sticky="top" expand="lg">
					        <Nav.Link href="/">Home</Nav.Link>
						    <Nav.Link href="/about">About</Nav.Link>
						    <Nav.Link href="/contact">Contact</Nav.Link>
						    <Nav.Link href="https://www.linkedin.com/in/baptiste-picard-b3a26b158">LinkedIn</Nav.Link>
					      	<hr />
				      	</Navbar>
					    <Route exact path="/" component={Home} />
					    <Route path="/about" component={About} />
					    <Route path="/contact" component={Contact} />
				    </div>
				</Router>	    
			</div>
		);
	}
}

export default MyHeader 
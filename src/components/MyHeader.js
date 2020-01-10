import React, { Component } from 'react'
import Home from "./Home"; 
import Contact from "./Contact"; 
import About from "./About";
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

const headerGradient = {
	background: "rgb(220, 220, 220)",
	//background: "linear-gradient(360deg, rgba(146,146,147,1) 8%, rgba(0,0,0,1) 100%, rgba(0,0,0,0.1250875350140056) 100%)"
}

class MyHeader extends Component{
	constructor(){
		super();
		this.state = {
			backgroundColor : "rgb(251,251,251)"

		}
	}
	render(){
		return(
			<div className="header">
				<div style={headerGradient}>
					<Navbar fluid="True">
					    <Navbar.Brand href="/">Logo</Navbar.Brand>	
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
			    </div>
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
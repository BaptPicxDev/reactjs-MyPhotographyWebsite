import React, { Component } from 'react'
import Home from "./Home"; 
import Contact from "./Contact"; 
import About from "./About";
import { Navbar } from 'react-bootstrap';
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
				<Navbar bg="light">
				</Navbar>
				<br />
				<Router>
			    <div>
			        <Link to="/">Home</Link>
			        <Link to="/about">About</Link>
			        <Link to="/contact">Contact</Link>
			      	<hr />
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
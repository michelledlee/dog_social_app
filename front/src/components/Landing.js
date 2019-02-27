import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import "./style/landing.css";
import Nav from 'react-bootstrap/Nav';

class Landing extends Component {
  render() {
    return (    
    <div className="landing">
    	<Nav className="justify-content-end" activeKey="/home">
    
    		<Nav.Item>
      			<Nav.Link href="/register">Signup <i class="fa fa-user-plus"></i>
      			</Nav.Link>
    		</Nav.Item>
    		<Nav.Item>
      			<Nav.Link href="/register">Login <i class="fa fa-user"></i>
      			</Nav.Link>
    		</Nav.Item>

  		</Nav>

    	<div className="content">
    	  <h1>If Dogs Can Speak</h1>
		  <h3>The Cutties Social App for Dogs</h3>
		  <hr/>
    	</div>
    	<div className="woof">
    		<Button href="/app"  variant="light" size="lg"><i class="fas fa-dog"> : woof</i></Button>
    	</div>
    </div>
         
    );
  }
}

export default Landing;
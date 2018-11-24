import React, { Component } from 'react';
import City from './City.jpg';

class Header extends Component {
  render() {
    return (

<header style={{border:'1px purple solid', height:'170px',position: 'relative',backgroundImage:'linear-gradient(30deg, aqua, black,aqua)'}}>  
<br/>
<br/>
<h1 style={{textAlign:"center", color:"white"}}>Dream City</h1>
</header>

);
  }
}

export default Header;

/*
<header style="border:1px purple solid; position: relative;">  
	<img src="rose.jpeg" alt:"Flower" style="border:1px red solid; height:200px; width:100%; object-fit: cover;"> 
</header>

*/





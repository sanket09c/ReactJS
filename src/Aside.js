import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
<aside style={{border:'1px pink solid', width:'19%', height:'500px', position:' relative', left: '81%', display:'inline-block',backgroundColor:'pink'}}>
  <div style={{color:'pink'}}>
<nav style={{textAlign:'center'}}>
    <a href="https://visitlondon.com/" target = "_blank">London</a><br/>
    <a href="https://newyorktours.onboardtours.com/" target = "_blank">NewYork</a><br/>
    <a href="https://www.bing.com/travelguide?q=Mumbai&l2sid=fbbc8d69-667a-e1ff-34bf-e524be01025d&form=TRGUML&qpvt=mumbai" target = "_blank">Mumbai</a><br/>
    <a href="https://www.tokyo-dome.co.jp/en/tourists/?utm_source=america&utm_medium=yppc&utm_campaign=ICJ" target = "_blank">Tokyo</a><br/>
  </nav>
  </div>
</aside>
    );
  }
}

export default Aside;

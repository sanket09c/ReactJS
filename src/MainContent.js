import React, { Component } from 'react';
import City from './City.jpg';


class MainContent extends Component {
  render() {
    return (
      <main style={{ paddingLeft:"10px",height:'500px', width:'80%', position: 'absolute', display:'inline-block',backgroundColor:'black',clear:'both'}}>
          <article style={{margin:"5px", border:'5px pink solid',width:'20%',height:'460px',backgroundColor:'black',color:'white',padding:'20px',float:'left'}}>
            <h1>London</h1>
            <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
            <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
          </article>
          <article style={{margin:"5px", border:'5px pink solid',width:'20%',height:'460px',backgroundColor:'black',color:'white',padding:'20px',float:'left'}}>
            <h1>NewYork</h1>
            <p>New York is a state in the northeastern United States. New York was one of the original thirteen colonies that formed the United States. With an estimated 19.8 million residents in 2015, it is the fourth-most-populous state in the United States</p>
          
          
            </article>
            <article style={{margin:"5px", border:'5px pink solid',width:'20%',height:'460px',backgroundColor:'black',color:'white',padding:'20px',float:'left'}}>
            <h1>Mumbai</h1>
            <p>Mumbai is the capital city of the Indian state of Maharashtra. It is the most populous city in India with an estimated city proper population of 12.4 million as of 2011</p>
            </article>
            <article style={{margin:"5px",border:'5px pink solid', width:'20%',height:'460px',backgroundColor:'black',color:'white',padding:'20px',float:'left'}}>
            <h1>Tokyo</h1>
            <p>Tokyo, officially Tokyo Metropolis, one of the 47 prefectures of Japan, has served as the Japanese capital since 1869. As of 2014 the Greater Tokyo Area ranked as the most populous metropolitan area in the world.</p>
            </article>     
      </main>
    );
  }
}

export default MainContent;

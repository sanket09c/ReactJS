import React, { Component } from 'react';
import Header from './Header'
import MainContent from './MainContent'
import Aside from './Aside'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'black'}}>
        <Header/>
        <MainContent/>
        <Aside/>
        <Footer/>
      </div>  
    );
  }
}

export default App;

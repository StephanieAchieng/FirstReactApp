import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
  super(props)
  state = {
  type: "Vegetables",
  images: "https://www.pexels.com/photo/orange-carrots-on-brown-woven-basket-3650647/",
  }
}
  render ( ) {
   return(
  
      <div>
        
        <h> We have {this.state.type} </h>
        <p> <img src={this.state.image}/> </p>
  
  </div>)
  
       }
      }
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'




class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Vegetables","fruits"],
      name:["Spinach","Oranges","Onions"],
      quantity:[30700,4000,]
    };
  }
  render(){
    return(
      <div >
       <h1 >Our Products</h1>
        <p><li>Spinach</li>
           <img src="https://cdn.pixabay.com/photo/2016/01/19/17/36/green-vegetables-1149790__340.jpg"></img>
           <p>This a re, {this.state.name[0]} of type,{this.state.type[0]},
           and the available
           quantity is, {this.state.quantity[2]}
            </p>
        </p>
        <p>
          <li>Oranges</li>
          <img src="https://cdn.pixabay.com/photo/2017/01/20/15/12/orange-1995079__340.jpg"></img>
           <p>And this are, {this.state.name[1]} of type,{this.state.type[1]},
           and the available
           quantity is, {this.state.quantity[1]}</p>
        </p>
         <p>
             <li>Onions</li>
               <img src="https://cdn.pixabay.com/photo/2016/08/03/01/13/onion-1565604__340.jpg"></img>
               <p>Finally,this are, {this.state.name[2]} of type,{this.state.type[0]},
           and the available
           quantity is, {this.state.quantity[0]} 
           </p> 
         </p>
       </div>
    );
    } 
  }
 // export default product;
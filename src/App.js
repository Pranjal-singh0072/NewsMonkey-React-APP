// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import News from './components/News';

function App(){
  const handleclickFunction = (e)=>{
  const body = document.querySelector("body");
  body.style.background = getRandomColor();
  
};
function getRandomColor(){
  let letters = "0123456789ABCDEF";
  let color ="#";
  for(let i=0;i<6;i++){
    color+= letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  // render() 
    return (
      // 
      <div>

           
       <Navbar  />
      
       
       <button type="button" class="btn btn-primary mx-2 my-3" onClick={handleclickFunction}>Colorchanger</button>
       {/* <NewsItem/> */}
       <News/>

      
      </div>
       
    );
    }
    export default App;
  
 









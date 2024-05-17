import ReactDOM from 'react-dom/client';
import './index.css'

import one from "./images/two.jpeg"
import two from "./images/five.jpeg"
import three from "./images/six.jpeg"
import four from "./images/four.jpeg"



const root = ReactDOM.createRoot(document.getElementById('root'));

var image =[one,two,three,four,two,three,four,one]
var title =["Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look"]
 
var ImageWithTitle = ({ image, title }) => (
  <div className='container' >
    <img src={image} alt={title} style={{width:"250px",}} />
    <h2>{title}</h2>
  </div>
);

root.render(

  <div className='ctr'>
    
    
      {image.map((image, index) => (
        <ImageWithTitle key={index} image={image} title={title[index]} />
      ))}
   
    

</div>);

// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(<App></App>)


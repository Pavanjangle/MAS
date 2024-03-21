import React from 'react'

function ProductCard(props) {
   
    let S1 = {color:"red", } // this is style object css 
  return (
    <div>
      <img style={{width:"200px", height:"200px"}} src={props.img}></img>
      <h1 style={S1}>{props.name}</h1>
    </div>
  )
}
// like this we can pass props(property) in parent component(app.js) to child component(Product.jsx)
// and use it for like js code
export default ProductCard;

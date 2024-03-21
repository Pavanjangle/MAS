import React from 'react'

function Footer() {
  let name = "Pavan";
  let sirname = " Jangale"

  function f1() {
    console.log("hey good afternoon")
  }
  return (
    <div>
      <h2>{name}{sirname}</h2>
      <button onClick={f1}>click me</button>  
    </div>
  )
}
// we also can create a varibles and function and call then like js 
// we can say we write a javascript in jsx this is the thing nthing else
export default Footer;

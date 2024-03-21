import React from 'react'

function Player(props) {
  return (
    <div>
      <h1>{props.pavan.name}</h1>
      <h2>{props.pavan.year}</h2>
      <h3>{props.pavan.game}</h3>
      <h4>{props.pavan.city}</h4>
    </div>
  )
}

export default Player;

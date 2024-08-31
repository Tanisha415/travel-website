import React from 'react'

function Dt(props) {
  return (
    <div>
         <h1>{props.name}</h1>
    <h2>{props.address}</h2>
    <img src={props.image} alt="" />
    </div>
  )
}

export default Dt
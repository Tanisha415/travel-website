import React, { useState } from 'react'

function pr(props) {
  const [name,setname]=useState()
  function kk(event)
  {
    setname(event.target.value);
  }
  return (
    //on change event in reat js
    <form action="">
      name:
      <h1>{name}</h1>
      <input type="text" onChange={kk}/>
    </form>
  )
}

export default pr
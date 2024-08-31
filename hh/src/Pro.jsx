import React, { useState } from 'react'

function Pro(props) {
    const [name,setname]=useState()
  return (
    <form action="">
        name:
        <h1>{name}</h1>
        <input type="text" onChange={(Event)=>setname(event.target.value)}/>
    </form>
  )
}
export default Pro
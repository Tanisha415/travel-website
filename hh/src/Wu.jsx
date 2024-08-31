import React, { useState } from 'react'

function Wu(props) {
const [name,setname]=useState()
function kk(){
    console.log(name);
    if(name==null)
        alert("please enter your name")
}
  return (
    <>
    <form action="">
        name:
        <input onChange={(event)=>{setname(event.target.value)}} type="text" />
        <input type="submit" onclick={kk}/>
        </form>
        </>
  )
}

export default Wu
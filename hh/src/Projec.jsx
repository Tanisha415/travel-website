import React, { useEffect, useState } from 'react'

function Projec(props) {
    const [r,setr]=useState(0);
    const [r1,setr1]=useState(10);
    useEffect(()=>{ console.log("welcome");},[r])
  return (
    <>
    <h1>{r}</h1>
    <button onClick={()=>setr(r+1)}>click here</button>
    <h1>{r1}</h1>
    <button onClick={()=>setr1(r1+1)}>click here</button>
    </>
  )
}

export default Projec
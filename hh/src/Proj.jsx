import React, { useRef } from 'react'
function Proj(props) {
    const r=useRef();
    function kk()
    {
        r.current.style.color="red";
    }
  return (
    <>
    <h1 ref={r}>welcome</h1>
    <button onClick={kk}>click here</button></>
  )
}

export default Proj
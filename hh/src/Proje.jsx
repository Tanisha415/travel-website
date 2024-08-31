import React, { useRef } from 'react'

function Proje(props) {
    const r=useRef();
    const j=useRef();
    const p=useRef();
    function kk(){
        r.current.style.color="red";
        r.current.innerHtml="abcdef";
        j.current.focus()
        p.current.style.backgroundColor="yellow"
    }
  return (
    <>
    <div ref={p} style={{backgroundColor:"red",height:"300px",width:"300px"}}>
    </div>
    <h1 ref={r}>welcome</h1>
    <input type="text" ref={j} />
    <button onClick={kk}>click here</button>
    </>
  )
}

export default Proje
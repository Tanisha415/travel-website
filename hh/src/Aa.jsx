import React, { useState } from 'react'

function Aa(props) {
    const [name,setname]=useState()
    const [password,setpassword]=useState()
    const [password1,setpassword1]=useState()
    function kk(){
        console.log(name)
        if(name==null)
            alert("please enter your name");
        else if(password!=password1)
            alert("please enter the same password");
    }
  return (
    <>
    <form action="">
        name:
        <input onChange={(event)=>{setname(event.target.value)}} type="text" />
        <br />
        password:
        <input onChange={(event)=>{setpassword(event.target.value)}} type="password"/>
        <br />
        confirm password:
        <input onChange={(event)=>{setpassword1(event.target.value)}} type="password"/>
        <br />
        <input type="submit" onClick={kk}/>
        </form>
        </>
  )
}

export default Aa
import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Projectsignup() {
    const [Fullname,setFullname]=useState()
    const [Password,setPassword]=useState()
    const [MobileNo,setMobileNo]=useState()
    const [Email,setEmail]=useState()
    const navigate=useNavigate()
  const submitdata = async () => {

    if (!Fullname ||!Password|| !MobileNo || !Email) {
      alert("plz fill form")
      return false;
    }
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ Fullname,Password,MobileNo,Email}),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      // localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      alert("data saved")

    }
    else
    {
      alert("wrong input")
    }
  };

  return (
    <>
    <div>
        <div className='m31'>
            <div className='m311'>
                <button id='oo' type="button">facebook</button>
                <br />
                <button id='rr' type="button">google</button>
            </div>
            <div className='m312'>

                <h3 id='aa'>Sign with your account</h3>
                <form action="">
          <input placeholder='full name' id='boxes'onChange={(event)=>{setFullname(event.target.value)}} type="text" />
                <br />
                <br />
          <input placeholder='Password' id='boxes'onChange={(event)=>{setPassword(event.target.value)}} type="Password" />
                
                <br />
                <br />
          <input placeholder='Mobile Number' id='boxes'onChange={(event)=>{setMobileNo(event.target.value)}} type="text" />
                
                <br />
                <br />
          <input placeholder='Email id' id='boxes'onChange={(event)=>{setEmail(event.target.value)}} type="Email" />
                
                <br />
                <br />
                <br />
                <button id='pp' type="button" onClick={submitdata}>CREATE ACCOUNT</button>
                </form>
               <br />
               </div>
               </div>
<button className='boxes4'><Link className='uu1' to="/">Back to home</Link></button>
                
                <h6 id='aa'>By logging in you agree to our <strong>Terms and Conditions</strong> and <strong>Privacy Policy</strong></h6>
    
    </div>
    </>
  )
}

export default Projectsignup
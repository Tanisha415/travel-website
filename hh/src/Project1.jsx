import React,{useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
function Project1(props) {
  const [Fullname,setFullname]=useState()
  const [Email,setEmail]=useState()
  const [MobileNo,setMobileNo]=useState()
  const [Subject,setSubject]=useState()
  const [Description,setDescription]=useState()
//   function kk(){
//     if(Fullname==null)
//         alert("please enter your name")
      
//     else if(email==null)
//       alert("please enter the email id")
//     else if(Mobileno==null)
//       alert("please enter the Mobile no")
//     else if(Subject==null)
//       alert("please enter the subject")
//     else if(Description==null)
//       alert("please enter the description")

// }
const navigate=useNavigate()

  const submitdata = async () => {
    if (!Fullname ||!Email || !MobileNo || !Subject ||!Description) {
      alert("plz fill form")
      return false;
    }
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ Fullname,Email,MobileNo,Subject,Description}),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      // localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      alert("save data")

    }
    else
    {
      alert("wrong input")
    }
  };

  return (
    <>
    <Navbar/>
    <div>
     
      <div className="m7">
        <img
          width="1485px"
          height="300px"
          src="https://th.bing.com/th/id/OIP.rA5WuLEpBwf4TvY89OpwzgHaFI?rs=1&pid=ImgDetMain"
          alt="img not found"
        />
      </div>
      <div className='n1'>
        <div className='n11'>
       <h1 id='aa'>Enquiry Form Password</h1>
       </div>
       <div className='n12'>
       <form id="form" action="">
        <div>
          Full Name
          <br />
          <input placeholder='full name' onChange={(event)=>{setFullname(event.target.value)}} type="text" />
          <br />
          <br />
          Email
          <br />
          <input placeholder='Email id' onChange={(event)=>{setEmail(event.target.value)}} type="text" />
          <br />
          <br />
          Mobile No
          <br />
          <input placeholder='Mobile no.'onChange={(event)=>{setMobileNo(event.target.value)}} type="text" />
          <br />
          <br />
          Subject
          <br />
          <input placeholder='Subject' onChange={(event)=>{setSubject(event.target.value)}} type="text" />
          <br />
          <br />
          Description
          <br />
          <textarea rows="20" cols="80" onChange={(event)=>{setDescription(event.target.value)}} placeholder='Description'></textarea>
          <br />
          <br />
          <button className='m23' onClick={submitdata}>Submit</button>
          </div>
       </form>
       </div>
       <br />
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000"className="m15">
        <div className="m151">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-google"></i>
        </div>
        <div className="m152">
          <h4 id="bb">@ 2020 TMS . All Rights Reserved</h4>
        </div>
      </div>
      </div>
      </>
  )
}

export default Project1
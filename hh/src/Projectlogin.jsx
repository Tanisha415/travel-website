import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Projectlogin(props) {
    const [username,setusername]=useState()
    const [password,setpassword]=useState()
  return (
    <div className='m25'>
      <div className='m24'>
       <h1 className='ff'>Sign In</h1>
       </div>
       <div className='m26'>
       <form id="form"action="">
        <div className='m27'>
          <label className='label1'>User Name:</label>
          <input className='boxes1' placeholder='user name'></input>
          </div>
          <br />
          <br />
          <div className='m27'>
            <label className='label1'>password</label>
          <input  className='boxes1'placeholder='Password' type='password'></input>
          </div>
          <br />
          <br />
          </form>
       </div>
       <br />
       <div className='m28'>
        <button className='boxes3'>Sign In</button>
       </div>
       <br />
       <div className='m29'>
<button className='boxes2'><Link className='uu1' to="/">Back to home</Link></button>
</div>
  
    </div>
  )
}

export default Projectlogin
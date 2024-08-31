import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Updatepassword() {
    const [Email, setEmail] = useState('');
    const [Fullname, setFullname] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitdata = async (event) => {
        event.preventDefault(); // Prevents form from reloading the page
        if (!Email ||!Fullname|| !Password) {
            alert("Please fill out the form");
            return false;
        }
        let result = await fetch("http://localhost:5000/update", {
            method: "put",
            body: JSON.stringify({Email,Fullname,Password }),
            headers: { "Content-Type": "application/json" },
        });
        result = await result.json();
        if (result) {
            alert("password update successful");
            navigate("/signin");
        } else {
            alert("Invalid credentials");
        }
    };
  return (
    <div>
    <div className='m31'>
        
        <div className='m312'>
            <h3 id='aa'>Update your Password</h3>
            <form >
                <input
                    placeholder='Email id'
                    id='boxes'
                    onChange={(event) => { setEmail(event.target.value); }}
                    type="email"
                />
                <br />
                <br />
                <input
                    placeholder='Full name'
                    id='boxes'
                    onChange={(event) => { setFullname(event.target.value); }}
                    type="text"
                />
                <br/>
                <br/>
                <input
                    placeholder='new Password'
                    id='boxes'
                    onChange={(event) => { setPassword(event.target.value); }}
                    type="password"
                />
                <br />
                <button id='pp' onClick={submitdata}>Update Password</button>
            </form>
        </div>
    </div>
    <button className='boxes4'><Link className='uu1' to="/">Back to home</Link></button>
</div>
  )
}

export default Updatepassword
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Projectsignin() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitdata = async (event) => {
        event.preventDefault(); // Prevents form from reloading the page
        if (!Email || !Password) {
            alert("Please fill out the form");
            return false;
        }
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({Email,Password }),
            headers: { "Content-Type": "application/json" },
        });
        result = await result.json();
        if (result) {
            localStorage.setItem('user', JSON.stringify(result))
            alert("Login successful");
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <div className='m31'>
                <div className='m311'>
                    <button id='oo' type="button">Facebook</button>
                    <br />
                    <button id='rr' type="button">Google</button>
                </div>
                <div className='m312'>
                    <h3 id='aa'>Sign in with your account</h3>
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
                            placeholder='Password'
                            id='boxes'
                            onChange={(event) => { setPassword(event.target.value); }}
                            type="password"
                        />
                        <br />
                        <Link to="/update">Forgot Password</Link>
                        <button id='pp' onClick={submitdata}>Sign In</button>
                    </form>
                </div>
            </div>
            <button className='boxes4'><Link className='uu1' to="/">Back to home</Link></button>
        </div>
    );
}

export default Projectsignin;

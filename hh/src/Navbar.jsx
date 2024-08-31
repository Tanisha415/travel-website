import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userData = JSON.parse(user);
    if (userData) {
      setUsername(userData.Fullname);
    } else {
      setUsername('');
    }
  }, []); // Empty dependency array to run only once

  const deleteUser = async () => {
    try {
      // Ensure `username` is correctly set and not empty
      if (!username) {
        alert('No user logged in.');
        return;
      }
  
      const response = await fetch("http://localhost:5000/delete", {
        method: "DELETE",
        body: JSON.stringify({ Fullname: username }), // Ensure body property matches server expectation
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
  
      if (result.success) {
        localStorage.clear(); // Clear localStorage on successful delete
        setUsername('');
        navigate("/"); // Navigate to home after deletion
        alert("User deleted successfully.");
      } else {
        throw new Error(result.message || 'Error deleting user.');
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(`Failed to delete user: ${error.message}`);
    }
  };
  
  const handleLogout = () => {
    localStorage.clear();
    setUsername(''); // Clear the username from state
    navigate('/'); // Navigate to home after logout
  };

  const handleAboutClick = (event) => {
    const user = localStorage.getItem('user');
    if (!user){
      event.preventDefault(); // Prevent default link behavior
      alert('Please sign in'); // Show alert if user is not logged in
    }
  };

  return (
    <div>
      <div className="m1">
        <div className="m3">
          <img
            className="m2"
            src="https://static.vecteezy.com/system/resources/previews/000/626/877/original/home-logo-building-vectors.jpg"
            alt="logo"
            data-aos="zoom-in"
          />
          <Link to="/admin">Admin Login</Link>
        </div>
        <div className="m4">
          <h3>Toll Number: 123456789</h3>
          {username ? (
            <div>
              <button onClick={handleLogout} className="ll">
                Logout {username}
              </button>
              <button onClick={deleteUser} className="ll">
                Delete Account
              </button>
            </div>
          ) : (
            <>
              <Link className="ll"  to="/signup">
                Signup
              </Link>
              <Link className="ll"  to="/signin">
                Signin
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="m5">
        <div className="m51">
          <h1 id="aa">Tourism Management System</h1>
        </div>
        <div className="m52">
          <img
            height="30px"
            width="30px"
            src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-lock-icon-png-image_3778111.jpg"
            alt="lock icon"
          />
          <h2>SAFE AND SECURE</h2>
        </div>
      </div>
      <div className="m6">
        <Link to="/">Home</Link>
        <Link to="/project3" onClick={handleAboutClick}>About</Link>
        <Link to="/project2" onClick={handleAboutClick}>Tour Packages</Link>
        <Link to="/terms" onClick={handleAboutClick}>Terms of Use</Link>
        <Link to="/contact" onClick={handleAboutClick}>Contact Us</Link>
        <Link to="/project1" onClick={handleAboutClick}>Enquiry</Link>
      </div>
    </div>
  );
}

export default Navbar;

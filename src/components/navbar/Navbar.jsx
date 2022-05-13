import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar= () =>{
    const navigate = useNavigate();

    const handleHome= () => {
      navigate("/", { state: {} });
    };
    return (
      <div className="navbar">
        <div className="navcontainer">
          <span className="logo">Zahra's Booking </span>
          <div className="navItems">
            <button className="navbtn" onClick={handleHome}>
              Home
            </button>
            <button className="navbtn">Register</button>
            <button className="navbtn">Login</button>
          </div>
        </div>
      </div>
    );
}

export default Navbar
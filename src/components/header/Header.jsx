import React from "react";
import "./Header.css";
import { FaBed } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaLandmark} from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      Header
      <div className="headerList">
        <div className="headerListItem">
          <div className="icon">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="icon">
            <FaPlane />
            <span>Fligts</span>
          </div>
          <div className="icon">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="icon">
            <FaLandmark />
            <span>Attractions</span>
          </div>
          <div className="icon">
            <FaTaxi />
            <span>Airport Taxi</span>
          </div>
        </div>






        
      </div>
    </div>
  );
};

export default Header;






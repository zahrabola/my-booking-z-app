import React from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FaSearchLocation} from "react-icons/fa";
const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelcontainer">
        <div className="hotelwrapper">
          <h1 className="hoteltitle">London Hotel</h1>
          <div className="hoteladress">
            <div className="hotelicon">
              <FaSearchLocation size="1.3em" />
              <span>Elton street, London </span>
            </div>
          </div>
          <span className="hoteldistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPH">
            Book a stay over £114 at this property and get a free airport taxi
          </span>
        </div>
      </div>
    </div>
  );
};
export default Hotel;

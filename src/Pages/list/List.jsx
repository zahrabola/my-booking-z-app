import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./List.css";





const List = () => {
  const location = useLocation ();
  const [destination, setDestination] = useState;







  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listcontainer">
        <div className="list-wrapper">
          <div className="listsearch">
            <h1 className="listtitle"> Search </h1>
            <div className="listitem">
              <label> Destination </label>
              <input placeholder="destination" type="text" />
            </div>
            <div className="listitem">
              <label> Check-in Date </label>
            </div>
            <div className="listitem">
              <label>Options</label>
            </div>

            <div className="listresult"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;

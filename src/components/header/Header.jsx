import { useState } from "react";
import "./Header.css";
import { FaBed } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";


const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer listmode">
        <div className="headerList">
          <div className="headerListItem ">
            <div className="icon active">
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
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travels – Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <div className="headericon">
              <FaBed size="1.3em" />
            </div>
            <input
              type="text"
              placeholder="Searching"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <div className="headericon">
              <FaCalendarDay size="1.3em" />
            </div>
            <span className="headerSearchText">{`${format(
              date[0].startDate,
              "dd/MM/yyyy"
            )}to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          </div>
          <div className="headerSearchItem">
            <div className="headericon">
              <FaPeopleArrows size="1.3em" />
            </div>
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn2">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

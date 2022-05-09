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
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listmode" : "headerContainer"
        }
      >
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

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
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
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <div className="headericon">
                  <FaPeopleArrows size="1.3em" />
                </div>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionitem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="OptCounBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="OptCounBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>

                    <div className="optionitem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="OptCounBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="OptCounBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>

                    <div className="optionitem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="OptCounBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.room}
                        </span>
                        <button
                          className="OptCounBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn2">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

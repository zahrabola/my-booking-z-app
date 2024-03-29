import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./List.css";
import SearchItem from "../../components/searchitem/SearchItem";





const List = () => {
  const location = useLocation ();
  const destination = useState(location.state.destination);
  const [date, setDate]= useState(location.state.date)
  const options = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);







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
              <input placeholder={destination} type="text" />
            </div>
            <div className="listitem">
              <label> Check-in Date </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listitem">
              <label>Options</label>
              <div className="listoptions">
                <div className="listoptionitem">
                  <span className="optiontext">
                    Min Price <small> per night</small>
                  </span>
                  <input type="number" className="listoptioninput" />
                </div>
                <div className="listoptionitem">
                  <span className="optiontext">
                    Max Price <small> per night</small>
                  </span>
                  <input type="number" className="listoptioninput" />
                </div>
                <div className="listoptionitem">
                  <span className="optiontext">Adult</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.adult}
                    className="listoptioninput"
                  />
                </div>
                <div className="listoptionitem">
                  <span className="optiontext">Children</span>
                  <input
                    type="number"
                    min={0}
                    placeholder={options.children}
                    className="listoptioninput"
                  />
                </div>
                <div className="listoptionitem">
                  <span className="optiontext">Room</span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.room}
                    className="listoptioninput"
                  />
                </div>
              </div>
            </div>
            <button className="btn-search">Search</button>
          </div>
          <div className="listresult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;

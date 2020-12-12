import React from "react";
import SearchSerial from "../../components/SearchSerial";
import SerialList from "../../components/SerialList";
import "./style.css";

const DashBoard = () => {
  return (
    <div className="list-card">
      <SearchSerial />
      <SerialList />
    </div>
  );
};

export default DashBoard;

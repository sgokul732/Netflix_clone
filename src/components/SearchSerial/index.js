import React, { useState, useEffect } from "react";
import { fetchShows } from "../../actions/SearchSerial";
import { connect } from "react-redux";
import './style.css';
const SearchSerial = ({ getSerials }) => {
  const [key, setKeyword] = useState("");
  getSerials(key);
  useEffect(() => {
    getSerials(key);
  }, [key]);

  return (
    <div className="input-group">
      <input
        onChange={(e) => setKeyword(e.target.value)}
        value={key}
        type="text"
        className="form-control"
        placeholder="Search Serial"
        aria-label="Recipient's username with two button addons"
      />
      <button
        onClick={() => getSerials(key)}
        className="btn btn-outline-secondary"
        type="submit"
      >
        Search
      </button>
      <button
        onClick={() => setKeyword("")}
        className="btn btn-outline-secondary"
        type="button"
      >
        Clear
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSerials: (key) => dispatch(fetchShows(key)),
  };
};
export default connect(null, mapDispatchToProps)(SearchSerial);

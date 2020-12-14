import React, { useState, useEffect } from "react";
import { fetchShows } from "../../actions/SearchSerial";
import { connect } from "react-redux";
import "./style.css";
const SearchSerial = ({ getSerials }) => {
  const [key, setKeyword] = useState("");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    getSerials(key);
  }, [submit]);

  return (
    <div className="input-group">
      <input
        onChange={(e) => {
          e.preventDefault();
          setKeyword(e.target.value);
        }}
        value={key}
        type="text"
        className="form-control"
        placeholder="Search Serial"
        aria-label="Recipient's username with two button addons"
      />
      <button
        onClick={() => setSubmit(!submit)}
        className="btn btn-outline-secondary"
        type="submit"
      >
        Search
      </button>
      <button
        onClick={() => {
          setKeyword("");
          setSubmit(!submit);
        }}
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

import React from "react";
import { useHistory } from "react-router-dom";
import ShowInfo from "../../components/ShowInfo";
import "./style.css";
import SearchEpisode from "../../components/SearchEpisode";
const SerialDetails = (props) => {
  const history = useHistory();

  return (
    <>
    <div className="back" >
      <button className="btn btn-primary" onClick={() => history.push("/")}>
        Back
      </button>
      </div>
      <div className="details">
        <ShowInfo {...props} />
        <SearchEpisode {...props} />
      </div>
    </>
  );
};

export default SerialDetails;

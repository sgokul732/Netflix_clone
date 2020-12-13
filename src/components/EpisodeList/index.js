import React from "react";
import EpisodeDetails from "../EpisodeDetails";

import { connect } from "react-redux";
import loadingImg from "../../assets/images/loading.png";
import noData from "../../assets/images/no-data.png";
import "./style.css";
const EpisodeList = (props) => {
  const { details, error, loading } = props;
  if (loading || !details) {
    return <img className="invalid" src={loadingImg} alt="Loading" />;
  }
  if (error)
    return <img className="invalid" src={noData} alt="No Data Available" />;
  return details.map((entry, i) => (
    <EpisodeDetails
      key={i}
      number={entry.number}
      runtime={entry.runtime}
      airdate={entry.airdate}
    />
  ));
};
const mapStateToProps = (state) => {
  return {
    details: state.GetEpisodeReducer.data,
    loading: state.GetEpisodeReducer.loading,
    error: state.GetEpisodeReducer.error,
  };
};

export default connect(mapStateToProps, null)(EpisodeList);

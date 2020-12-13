import React, { useEffect, useState } from "react";
import "./style.css";

import { connect } from "react-redux";

import { fetchSeasons, fetchEpisodes } from "../../actions/SearchEpisode";
const SearchEpisode = (props) => {
  const [value, setValue] = useState(1);
  const {
    match: {
      params: { id },
    },
    getSeasons,
    seasons,
    getEpisodes,
  } = props;
  useEffect(() => {
    getSeasons(id);
  }, [id]);

  useEffect(() => {
    getEpisodes(value);
  }, [value]);
  const seasonData =
    seasons &&
    seasons.map((entry) => {
      return (
        <option key={entry.id} value={entry.id}>
         Season {entry.number}
        </option>
      );
    });

  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setValue(e.target.value)}
        className="custom-select"
        id="inputGroupSelect02"
      >
        {seasonData}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    seasons: state.GetSeasonsReducer.data,
    loading: state.GetSeasonsReducer.loading,
    error: state.GetSeasonsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSeasons: (key) => dispatch(fetchSeasons(key)),
    getEpisodes: (key) => dispatch(fetchEpisodes(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchEpisode);

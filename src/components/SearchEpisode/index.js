import React,{useEffect} from 'react'
import './style.css'
import { GetSeasonsReducer } from "../../actions/SearchEpisode";
import { connect } from "react-redux";
import {  } from "../../actions/SearchEpisode";
import {fetchSeasons} from '../../actions/SearchEpisode'
const SearchEpisode = (props) => {
  const {
    match: {
      params: { id },
    },
    getSeasons,
    details,
    error,
    loading,
  } = props;
  useEffect(() => {
    getSeasons(id);
  }, []);
  return (
    <div class="input-group mb-3">
    <select class="custom-select" id="inputGroupSelect02">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    details: state.GetSeasonsReducer.data,
    loading: state.GetSeasonsReducer.loading,
    error: state.GetSeasonsReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSeasons: (key) => dispatch(fetchSeasons(key)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchEpisode);


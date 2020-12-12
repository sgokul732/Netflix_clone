import axios from "axios";
export const getShows = () => {
  return {
    type: "GET_SHOWS",
  };
};

export const getShowsSuccess = (data) => {
  return {
    type: "GET_SHOWS_SUCCESS",
    payload: data,
  };
};

export const getShowsFailure = (data) => {
  return {
    type: "GET_SHOWS_FAILURE",
    payload: data,
  };
};

const BASE_URL = "http://api.tvmaze.com/shows";

export const fetchShows = (key) => {
  let URI = BASE_URL;
  if (key) URI = BASE_URL + "?q=:" + key;

  return (dispatch) => {
    dispatch(getShows());
    axios
      .get(URI)
      .then((res) => {
        const shows = res.data;
        dispatch(getShowsSuccess(shows));
      })
      .catch((err) => {
        const shows = err.data;
        dispatch(getShowsFailure(shows));
      });
  };
};

export const getShowDetail = () => {
  return {
    type: "GET_SHOW_DETAIL",
  };
};

export const getShowDetailSuccess = (data) => {
  return {
    type: "GET_SHOW_DETAIL_SUCCESS",
    payload: data,
  };
};

export const getShowDetailFailure = (data) => {
  return {
    type: "GET_SHOW_DETAIL_FAILURE",
    payload: data,
  };
};

export const fetchShowDetails = (key) => {
  let URI = BASE_URL + "/" + key;

  return (dispatch) => {
    dispatch(getShowDetail());
    axios
      .get(URI)
      .then((res) => {
        const shows = res.data;
        dispatch(getShowDetailSuccess(shows));
      })
      .catch((err) => {
        const shows = err.data;
        dispatch(getShowDetailFailure(shows));
      });
  };
};

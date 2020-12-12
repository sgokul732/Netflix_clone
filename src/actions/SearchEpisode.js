import axios from "axios";
export const getSeasons = () => {
  return {
    type: "GET_SEASONS",
  };
};

export const getSeasonsSuccess = (data) => {
  return {
    type: "GET_SEASONS_SUCCESS",
    payload: data,
  };
};

export const getSeasonsFailure = (data) => {
  return {
    type: "GET_SEASONS_FAILURE",
    payload: data,
  };
};

const BASE_URL = "http://api.tvmaze.com/shows/";

export const fetchSeasons = (key) => {

  let URI = BASE_URL + key+"/seasons";

  return (dispatch) => {
    dispatch(getSeasons());
    axios
      .get(URI)
      .then((res) => {
        const shows = res.data;
        dispatch(getSeasonsSuccess(shows));
      })
      .catch((err) => {
        const shows = err.data;
        dispatch(getSeasonsFailure(shows));
      });
  };
};



export const GetSeasonsReducer = (state={} , action) => {
    switch (action.type) {
      case "GET_SEASONS":
        return {
          
          loading: true,
          data: [],
          error: "",
        };
      case "GET_SEASONS_SUCCESS":
        return {
          
          loading: false,
          data: action.payload,
          error: "",
        };
      case "GET_SEASONS_FAILURE":
        return {
          loading: false,
          data: [],
          error: "error",
        };
      default:
        return state;
    }
  };
  
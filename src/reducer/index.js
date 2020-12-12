import { combineReducers } from "redux";
import { SearchSerialReducer, ShowDetailReducer } from "./SearchSerialReducer";
import { GetSeasonsReducer, GetEpisodeReducer } from "./SearchEpisodeReducer";
const rootReducer = combineReducers({
  SearchSerialReducer,
  ShowDetailReducer,
  GetSeasonsReducer,
  GetEpisodeReducer,
});
export default rootReducer;

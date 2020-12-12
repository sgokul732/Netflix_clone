import { combineReducers } from "redux";
import { SearchSerialReducer, ShowDetailReducer } from "./SearchSerialReducer";
import { GetSeasonsReducer } from "./SearchEpisodeReducer";
const rootReducer = combineReducers({
  SearchSerialReducer,
  ShowDetailReducer,
  GetSeasonsReducer,
});
export default rootReducer;

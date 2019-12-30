import { combineReducers } from "redux";
import { favouritesReducer } from "./favouritesReducer";
import { dataReducer } from "./dataReducer";

export default combineReducers({
  favourites: favouritesReducer,
  pageData: dataReducer
});

import { combineReducers } from "redux";
import livreReducer from "./livreReducer";

const globalReducer = combineReducers({
  livreReducer
});

export default globalReducer;

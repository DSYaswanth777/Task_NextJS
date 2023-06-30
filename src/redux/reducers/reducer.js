// reducers.js

import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers if needed
});

export default rootReducer;

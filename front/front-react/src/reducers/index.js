import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flashReducer from "./flashReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  flash: flashReducer
});
export default allReducers;

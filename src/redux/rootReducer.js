import { combineReducers } from "redux";
import usersReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: usersReducer,
});

export default rootReducer;

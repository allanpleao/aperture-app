import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";

export const rootReducer = combineReducers({
    auth: authSlice,
})
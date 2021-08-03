import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postReducer";
import messageReducer from "./messageReducers";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
    post:postReducer,
    message:messageReducer,
    profile:profileReducer,
})
export default rootReducer
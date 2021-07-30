import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postReducer";
import messageReducer from "./messageReducers";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
    post:postReducer,
    message:messageReducer,
})
export default rootReducer
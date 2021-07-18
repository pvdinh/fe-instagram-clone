import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
    post:postReducer,
})
export default rootReducer
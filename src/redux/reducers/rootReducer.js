import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
})
export default rootReducer
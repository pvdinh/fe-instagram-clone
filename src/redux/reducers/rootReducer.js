import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postReducer";
import messageReducer from "./messageReducers";
import profileReducer from "./profileReducer";
import storyReducer from "./storyReducer";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
    post:postReducer,
    message:messageReducer,
    profile:profileReducer,
    story:storyReducer,
})
export default rootReducer
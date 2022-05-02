import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postReducer";
import messageReducer from "./messageReducers";
import profileReducer from "./profileReducer";
import storyReducer from "./storyReducer";
import exploreReducer from "./exploreReducer";
import activityReducer from "./activityReducer";
import commentReducer from "./commentReducer";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
    login:LoginReducer,
    home:homeReducer,
    post:postReducer,
    message:messageReducer,
    profile:profileReducer,
    story:storyReducer,
    explore:exploreReducer,
    activity:activityReducer,
    comment:commentReducer,
    group:groupReducer,
})
export default rootReducer
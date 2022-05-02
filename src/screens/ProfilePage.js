import {connect} from "react-redux";
import ProfileComponent from "../components/profile/ProfileComponent";
import profileAction from "../redux/actions/profileAction";
import homeActions from "../redux/actions/homeActions";
import postActions from "../redux/actions/postActions";

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
        currentUserAccountSetting:state.profile.currentUserAccountSetting,
        listPostDetails:state.profile.listPostDetails,
        listSavedPostDetails: state.profile.listSavedPostDetails,
        listPostVideos: state.profile.listPostVideos,
        isHavingStory: state.profile.isHavingStory,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile:(username,callback,history)=>{
            dispatch(profileAction.action.getUserProfile(username,callback,history))
        },
        getSavedPost: (username, callback, history) => {
            dispatch(profileAction.action.getSavedPost(username, callback, history))
        },
        getPostVideo: (username, callback, history, payload) => {
            dispatch(profileAction.action.getPostVideo(username, callback, history,payload))
        },
        getPostPrivate: (username, callback, history, payload) => {
            dispatch(profileAction.action.getPostPrivate(username, callback, history,payload))
        },
        fetchPostVideo: (username, callback, history, payload) => {
            dispatch(profileAction.action.fetchPostVideo(username, callback, history,payload))
        },
        checkFollowingUser: (userFollowingId,callback) =>{
            dispatch(profileAction.action.checkFollowingUser(userFollowingId,callback))
        },
        checkUserHavingStory:(userId)=>{
            dispatch(profileAction.action.checkUserHavingStory(userId))
        },
        beginFollowing: (userFollowingId) => {
            dispatch(homeActions.action.beginFollowing(userFollowingId))
        },
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
        postImageToCloudinary: (data,callback) => {
            dispatch(postActions.action.postImageToCloudinary(data,callback))
        },
        getUserAccountProfile: (callback) => {
            dispatch(homeActions.action.getUserAccountProfile(callback))
        },
        changeProfilePhoto:(data,callback) =>{
            dispatch(profileAction.action.changeProfilePhoto(data,callback))
        },
        findFollowingByCurrentUser: (payload) => {
            dispatch(profileAction.action.findFollowingByCurrentUser(payload))
        },
        findFollowersByCurrentUser: (payload) => {
            dispatch(profileAction.action.findFollowersByCurrentUser(payload))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent)
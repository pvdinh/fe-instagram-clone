import profileAction from "../actions/profileAction";
import homeActions from "../actions/homeActions";

const initState={
    currentUserAccountSetting:{},
    listPostDetails:[],
    listSavedPostDetails:[],
    listPostVideos:[],
    listFollowing:[],
    listFollowers:[],
    isHavingStory: false,
    reloadListFollowers:false,
}
const ProfileReducer = (state=initState,action)=>{
    switch (action.type) {
        case profileAction.type.GET_USER_PROFILE_SUCCESS:
            return {...state, currentUserAccountSetting: action.data.userAccountSetting,listPostDetails: action.data.postDetails}
        case profileAction.type.GET_SAVED_POST_SUCCESS:
            return {...state, listSavedPostDetails: action.data}
        case profileAction.type.GET_POST_VIDEO_SUCCESS:
            return {...state, listPostVideos: [...state.listPostVideos,...action.data]}
        case profileAction.type.FETCH_POST_VIDEO_SUCCESS:
            return {...state, listPostVideos: action.data}
        case profileAction.type.CHECK_USER_HAVING_STORY_SUCCESS:
            return {...state, isHavingStory: action.data}
        case profileAction.type.FIND_FOLLOWING_BY_CURRENT_USER_SUCCESS:
            return {...state, listFollowing: action.data}
        case profileAction.type.FIND_FOLLOWERS_BY_CURRENT_USER_SUCCESS:
            return {...state, listFollowers: action.data}
        case homeActions.type.REMOVE_FOLLOWING_SUCCESS:
            return {...state, reloadListFollowers: !state.reloadListFollowers}
        default :
            return {...state}
    }
}
export default ProfileReducer
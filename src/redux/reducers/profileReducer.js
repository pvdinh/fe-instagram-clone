import profileAction from "../actions/profileAction";

const initState={
    currentUserAccountSetting:{},
    listPostDetails:[],
    listSavedPostDetails:[],
}
const ProfileReducer = (state=initState,action)=>{
    switch (action.type) {
        case profileAction.type.GET_USER_PROFILE_SUCCESS:
            return {...state, currentUserAccountSetting: action.data.userAccountSetting,listPostDetails: action.data.postDetails}
        case profileAction.type.GET_SAVED_POST_SUCCESS:
            return {...state, listSavedPostDetails: action.data}
        default :
            return {...state}
    }
}
export default ProfileReducer
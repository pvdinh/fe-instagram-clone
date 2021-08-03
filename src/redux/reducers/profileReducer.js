import profileAction from "../actions/profileAction";

const initState={
    currentUserAccountSetting:{},
    listPostDetails:[],
}
const ProfileReducer = (state=initState,action)=>{
    switch (action.type) {
        case profileAction.type.GET_USER_PROFILE_SUCCESS:
            return {...state, currentUserAccountSetting: action.data.userAccountSetting,listPostDetails: action.data.postDetails}
        default :
            return {...state}
    }
}
export default ProfileReducer
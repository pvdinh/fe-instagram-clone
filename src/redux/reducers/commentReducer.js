import comment from "../actions/comment";

const initState ={
    listIdUserLikedComment:[],
    listUserAccountSettingLikedCommentPost:[],
}
const commentReducer = (state = initState,action) =>{
    switch (action.type) {
        case comment.type.GET_LIST_ID_USER_LIKED_COMMENT_SUCCESS:
            return {...state,listIdUserLikedComment: [...action.data]}
        case comment.type.GET_USER_ACCOUNT_SETTING_LIKED_COMMENT_POST_SUCCESS:
            return {...state,listUserAccountSettingLikedCommentPost: [...action.data]}
        default:
            return {...state}
    }
}
export default commentReducer
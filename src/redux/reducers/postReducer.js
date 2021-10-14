import postActions from "../actions/postActions";

const initState = {
    listPostOfFollowing: [],
}
const postReducer = (state = initState, action) => {
    switch (action.type) {
        case postActions.type.GET_ALL_POST_OF_FOLLOWING_SUCCESS:
            return {...state,listPostOfFollowing: [...state.listPostOfFollowing,...action.data]}
        case postActions.type.FETCH_ALL_POST_OF_FOLLOWING_SUCCESS:
            return {...state,listPostOfFollowing: action.data}
        default:
            return {...state}
    }
}
export default postReducer
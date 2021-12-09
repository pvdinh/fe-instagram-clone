import homeActions from "../actions/homeActions";

const initState = {
    userAccountProfile: {},
    listUserSuggestionsToFollow: [],
    listHistorySearchUser: [],
}
const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case homeActions.type.GET_USER_ACCOUNT_PROFILE_SUCCESS:
            return {...state, userAccountProfile: action.data}
        case homeActions.type.GET_SUGGESTIONS_TO_FOLLOW_SUCCESS:
            return {...state, listUserSuggestionsToFollow: action.data}
        case homeActions.type.GET_HISTORY_SEARCH_USER_SUCCESS:
            return {...state, listHistorySearchUser: action.data}
        default :
            return {...state}
    }
}
export default homeReducer
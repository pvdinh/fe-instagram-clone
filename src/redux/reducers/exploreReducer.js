import exploreActions from "../actions/exploreActions";

const initState ={
    listExplorePosts:[],
}
const exploreReducer = (state = initState,action) =>{
    switch (action.type) {
        case exploreActions.type.GET_EXPLORE_POSTS_SUCCESS:
            return {...state,listExplorePosts: [...state.listExplorePosts,...action.data]}
        case exploreActions.type.FETCH_EXPLORE_POSTS_SUCCESS:
            return {...state,listExplorePosts: action.data}
        default:
            return {...state}
    }
}
export default exploreReducer
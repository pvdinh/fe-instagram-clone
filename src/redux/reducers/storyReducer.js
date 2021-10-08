import StoryAction from "../actions/StoryAction";

const inItState={
    listUserHaveStory:[],
    currentUserDisplayStory:{},
}
const storyReducer = (state = inItState,action) =>{
    switch (action.type) {
        case StoryAction.type.GET_ALL_STORY_FOLLOWING_SUCCESS:
            return {...state,listUserHaveStory: action.data}
        case StoryAction.type.SET_CURRENT_DISPLAY_STORY_SUCCESS:
            return {...state,currentUserDisplayStory: action.data}
        default:
            return {...state}
    }
}
export default storyReducer
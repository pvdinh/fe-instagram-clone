import StoryAction from "../actions/StoryAction";

const inItState={
    listUserHaveStory:[],
}
const storyReducer = (state = inItState,action) =>{
    switch (action.type) {
        case StoryAction.type.GET_ALL_STORY_FOLLOWING_SUCCESS:
            return {...state,listUserHaveStory: action.data}
        default:
            return {...state}
    }
}
export default storyReducer
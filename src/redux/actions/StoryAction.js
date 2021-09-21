const type ={
    GET_ALL_STORY_FOLLOWING:"GET_ALL_STORY_FOLLOWING",
    GET_ALL_STORY_FOLLOWING_SUCCESS:"GET_ALL_STORY_FOLLOWING_SUCCESS",
    BEGIN_STORY:"BEGIN_STORY",
    BEGIN_STORY_SUCCESS:"BEGIN_STORY_SUCCESS",
    END_STORY:"END_STORY",
    END_STORY_SUCCESS:"END_STORY_SUCCESS",
}
const action = {
    getAllStoryFollowing:(callback) => {
        return{
            type:type.GET_ALL_STORY_FOLLOWING,
            callback,
        }
    },
    beginStory:(story) => {
        return{
            type:type.BEGIN_STORY,
            data:story,
        }
    },
    endStory:(pId) => {
        return{
            type:type.END_STORY,
            id:pId,
        }
    },
}
export default {type,action}
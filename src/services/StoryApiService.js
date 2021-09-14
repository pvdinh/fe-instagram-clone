import StoryRequest from "../requests/StoryRequest";

export const getAllStoryFollowing = () => {
    let storyRequest = new StoryRequest()
    return storyRequest.getAllStoryFollowing()
}
export const beginStory = (story) => {
    let storyRequest = new StoryRequest()
    return storyRequest.beginStory(story)
}
export const endStory = (pId) => {
    let storyRequest = new StoryRequest()
    return storyRequest.endStory(pId)
}
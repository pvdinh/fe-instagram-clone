import ExploreRequest from "../requests/ExploreRequest";

export const getExplorePosts = (payload) =>{
    const exploreRequest = new ExploreRequest()
    return exploreRequest.getExplorePosts(payload)
}
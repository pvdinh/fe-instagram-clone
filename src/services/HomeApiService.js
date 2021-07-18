import HomeRequest from "../requests/HomeRequest";

export const getUserAccountProfile = () => {
    const homeRequest = new HomeRequest()
    return homeRequest.getUserAccountProfile()
}
export const getSuggestionsToFollow = () => {
    const homeRequest = new HomeRequest()
    return homeRequest.getSuggestionsToFollow()
}
export const beginFollowing = (userFollowingId) => {
    const homeRequest = new HomeRequest()
    return homeRequest.beginFollowing(userFollowingId)
}
export const endFollowing = (userFollowingId) => {
    const homeRequest = new HomeRequest()
    return homeRequest.endFollowing(userFollowingId)
}
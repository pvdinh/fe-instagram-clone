import PostRequest from "../requests/PostRequest";

export const getAllPostInformationFollowing = () =>{
    const postRequest = new PostRequest()
    return postRequest.getAllPostOfFollowing()
}
export const likePost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.likePost(pId)
}
export const unLikePost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.unLikePost(pId)
}
export const commentPost = (data) =>{
    const postRequest = new PostRequest()
    return postRequest.commentPost(data)
}
export const getCommentPost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.getCommentPost(pId)
}
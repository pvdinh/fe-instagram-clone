import PostRequest from "../requests/PostRequest";

export const getAllPostInformationFollowing = (payload) =>{
    const postRequest = new PostRequest()
    return postRequest.getAllPostOfFollowing(payload)
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
export const postNewPost = (data) =>{
    const postRequest = new PostRequest()
    return postRequest.postNewPost(data)
}
export const deletePost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.deletePost(pId)
}
export const postImageToCloudinary = (data) =>{
    const postRequest = new PostRequest()
    return postRequest.postImageToCloudinary(data)
}
export const getPostInformationFromPId = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.getPostInformationFromPId(pId)
}
export const checkSavedPost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.checkSavedPost(pId)
}
export const endSavePost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.endSavePost(pId)
}
export const beginSavePost = (pId) =>{
    const postRequest = new PostRequest()
    return postRequest.beginSavePost(pId)
}
export const getUserAccountSettingLikedPost = (payload) =>{
    const postRequest = new PostRequest()
    return postRequest.getUserAccountSettingLikedPost(payload)
}
import CommentRequest from "../requests/CommentRequest";

export const getListIdUserLikedComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.getListIdUserLikedComment(idComment)
}
export const getAllReplyComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.getAllReplyComment(idComment)
}
export const likeComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.likeComment(idComment)
}
export const unLikeComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.unLikeComment(idComment)
}
export const likeReplyComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.likeReplyComment(idComment)
}
export const unLikeReplyComment = (idComment) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.unLikeReplyComment(idComment)
}
export const getUserAccountSettingLikedCommentPost = (payload) =>{
    const commentRequest = new CommentRequest()
    return commentRequest.getUserAccountSettingLikedCommentPost(payload)
}
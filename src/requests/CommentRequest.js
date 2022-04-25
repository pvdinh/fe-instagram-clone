import BaseRequest from "./BaseRequest";

class CommentRequest extends BaseRequest{
    getListIdUserLikedComment(idComment){
        let url = `comment/${idComment}`
        return this.get(url)
    }
    getAllReplyComment(idComment){
        let url = `comment/${idComment}/all-reply`
        return this.get(url)
    }
    likeComment(idComment){
        let url = `comment/${idComment}/like`
        return this.post(url)
    }
    unLikeComment(idComment){
        let url = `comment/${idComment}/unlike`
        return this.post(url)
    }
    likeReplyComment(idComment){
        let url = `comment/${idComment}/like-reply-comment`
        return this.post(url)
    }
    unLikeReplyComment(idComment){
        let url = `comment/${idComment}/unlike-reply-comment`
        return this.post(url)
    }
    getUserAccountSettingLikedCommentPost(payload){
        let url = `comment/${payload.idComment}/all?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
}
export default CommentRequest
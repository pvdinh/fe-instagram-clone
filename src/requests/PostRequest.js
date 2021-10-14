import BaseRequest from "./BaseRequest";
import {API_CLOUDINARY_BASE_URL} from "../url";

class PostRequest extends BaseRequest{
    getAllPostOfFollowing(payload){
        let url = `post/following?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    likePost(pId){
        let url = `post/${pId}/like`
        return this.post(url)
    }
    unLikePost(pId){
        let url = `post/${pId}/unlike`
        return this.post(url)
    }
    commentPost(data){
        let url = 'post/comment'
        return this.post(url,data)
    }
    getCommentPost(pId){
        let url = `post/${pId}/comment`
        return this.get(url)
    }
    postImageToCloudinary(data){
        let url = API_CLOUDINARY_BASE_URL
        return this.postImageToCloud(url,data)
    }
    postNewPost(data){
        let url = `post`
        return this.post(url,data)
    }
    deletePost(pId){
        let url = `post/${pId}/delete`
        return this.post(url)
    }
    getPostInformationFromPId(pId){
        let url = `post/${pId}/get`
        return this.get(url)
    }
    checkSavedPost(pId){
        let url = `post/${pId}/check-save-post`
        return this.get(url,pId)
    }
    endSavePost(pId){
        let url = `post/${pId}/end-save-post`
        return this.post(url,pId)
    }
    beginSavePost(pId){
        let url = `post/${pId}/begin-save-post`
        return this.post(url,pId)
    }
}
export default PostRequest
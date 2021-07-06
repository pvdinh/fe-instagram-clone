import BaseRequest from "./BaseRequest";

class PostRequest extends BaseRequest{
    getAllPostOfFollowing(){
        let url = 'post/following'
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
}
export default PostRequest
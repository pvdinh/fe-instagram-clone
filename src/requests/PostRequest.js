import BaseRequest from "./BaseRequest";

class PostRequest extends BaseRequest{
    getAllPostOfFollowing(){
        let url = 'post/following'
        return this.get(url)
    }
}
export default PostRequest
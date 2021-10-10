import BaseRequest from "./BaseRequest";

class ExploreRequest extends BaseRequest{
    getExplorePosts(payload){
        let url = `explore?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
}
export default ExploreRequest
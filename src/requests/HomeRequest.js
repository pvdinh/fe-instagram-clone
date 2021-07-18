import BaseRequest from "./BaseRequest";

export default class HomeRequest extends BaseRequest{
    getUserAccountProfile(){
        let url = 'user-account-setting/get'
        return this.get(url)
    }
    getSuggestionsToFollow(){
        let url = 'follow/suggestions'
        return this.get(url)
    }
    beginFollowing(userFollowingId){
        let url = `follow/${userFollowingId}/begin`
        return this.post(url)
    }
    endFollowing(userFollowingId){
        let url = `follow/${userFollowingId}/end`
        return this.delete(url)
    }
}
import BaseRequest from "./BaseRequest";

export class ProfileRequest extends BaseRequest{
    getUserProfile(username){
        let url=`user-account-setting/${username}/profile`
        return this.post(url)
    }   
    editUserAccountSetting(data){
        let url=`user-account-setting/edit`
        return this.post(url,data)
    }
    getPrivateInformation(){
        let url=`user-account-setting/get-private-info`
        return this.get(url)
    }
    changePassword(data){
        let url=`user-account-setting/change-password`
        return this.post(url,data)
    }
    getSavedPost(username){
        let url=`user-account-setting/${username}/get-saved-post`
        return this.get(url,username)
    }
    checkFollowingUser(id){
        let url=`user-account-setting/${id}/checkFollow`
        return this.get(url)
    }
    checkUserHavingStory(id){
        let url=`user-account-setting/${id}/checkStory`
        return this.get(url)
    }
}
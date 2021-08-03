import BaseRequest from "./BaseRequest";

export class ProfileRequest extends BaseRequest{
    getUserProfile(username){
        let url=`user-account-setting/${username}/profile`
        return this.post(url)
    }
}
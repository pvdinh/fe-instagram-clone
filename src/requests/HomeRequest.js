import BaseRequest from "./BaseRequest";

export default class HomeRequest extends BaseRequest{
    getUserAccountProfile(){
        let url = 'user-account-setting/get'
        return this.get(url)
    }
}
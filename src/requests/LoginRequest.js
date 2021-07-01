import BaseRequest from "./BaseRequest";

export default class LoginRequest extends BaseRequest {
    login(params) {
        let url = 'login'
        return this.post(url, params)
    }
}
import BaseRequest from "./BaseRequest";

export default class LoginRequest extends BaseRequest {
    login(params) {
        let url = 'login'
        return this.post(url, params)
    }
    register(data) {
        let url = 'auth/register'
        return this.postRegister(url, data)
    }
}
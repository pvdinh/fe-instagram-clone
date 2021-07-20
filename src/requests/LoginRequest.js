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
    validatePhone(s){
        let url = `auth/${s}/validatePhone`
        return this.postRegister(url)
    }
    validateEmail(s){
        let url = `auth/${s}/validateEmail`
        return this.postRegister(url)
    }
    validateUsername(s){
        let url = `auth/${s}/validateUsername`
        return this.postRegister(url)
    }
}
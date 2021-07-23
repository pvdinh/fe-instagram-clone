import LoginRequest from "../requests/LoginRequest";

export const loginAPI = (params) => {
    const loginRequest = new LoginRequest()
    return loginRequest.login(params)
}
export const registerAPI = (data) => {
    const loginRequest = new LoginRequest()
    return loginRequest.register(data)
}
export const validatePhone = (s) => {
    const loginRequest = new LoginRequest()
    return loginRequest.validatePhone(s)
}
export const validateEmail = (s) => {
    const loginRequest = new LoginRequest()
    return loginRequest.validateEmail(s)
}
export const validateUsername = (s) => {
    const loginRequest = new LoginRequest()
    return loginRequest.validateUsername(s)
}
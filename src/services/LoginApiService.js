import LoginRequest from "../requests/LoginRequest";

export const loginAPI = (params) => {
    const loginRequest = new LoginRequest()
    return loginRequest.login(params)
}
export const registerAPI = (data) => {
    const loginRequest = new LoginRequest()
    return loginRequest.register(data)
}
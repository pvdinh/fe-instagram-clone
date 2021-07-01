import LoginRequest from "../requests/LoginRequest";

export const loginAPI = (params) => {
    const loginRequest = new LoginRequest()
    return loginRequest.login(params)
}
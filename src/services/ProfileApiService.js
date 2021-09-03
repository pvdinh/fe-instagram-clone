import {ProfileRequest} from "../requests/ProfileRequest";

export const getUserProfile = (username) => {
    let profileRequest = new ProfileRequest()
    return profileRequest.getUserProfile(username)
}
export const editUserAccountSetting = (data) => {
    let profileRequest = new ProfileRequest()
    return profileRequest.editUserAccountSetting(data)
}
export const getPrivateInformation = () => {
    let profileRequest = new ProfileRequest()
    return profileRequest.getPrivateInformation()
}
export const changePassword = (data) => {
    let profileRequest = new ProfileRequest()
    return profileRequest.changePassword(data)
}
export const getSavedPost = (username) => {
    let profileRequest = new ProfileRequest()
    return profileRequest.getSavedPost(username)
}
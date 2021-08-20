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
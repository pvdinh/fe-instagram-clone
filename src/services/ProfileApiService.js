import {ProfileRequest} from "../requests/ProfileRequest";

export const getUserProfile = (username) => {
    let profileRequest = new ProfileRequest()
    return profileRequest.getUserProfile(username)
}
import PostRequest from "../requests/PostRequest";

export const getAllPostInformationFollowing = () =>{
    const postRequest = new PostRequest()
    return postRequest.getAllPostOfFollowing()
}
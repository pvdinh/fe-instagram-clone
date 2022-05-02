import GroupRequest from "../requests/GroupRequest";

export const getGroupByRole = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getGroupByRole(payload)
}

export const createGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.createGroup(payload)
}

export const addMemberIntoGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.addMemberIntoGroup(payload)
}

export const getGroupByIdGroupAndIdUser = (idGroup) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getGroupByIdGroupAndIdUser(idGroup)
}

export const getAllPostInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getAllPostInGroup(payload)
}

export const fetchAllPostInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.fetchAllPostInGroup(payload)
}

export const getAllPostInAllGroupSelf = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getAllPostInAllGroupSelf(payload)
}

export const fetchAllPostInAllGroupSelf = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.fetchAllPostInAllGroupSelf(payload)
}
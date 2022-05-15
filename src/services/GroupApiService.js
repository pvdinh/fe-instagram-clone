import GroupRequest from "../requests/GroupRequest";

export const getGroupByRole = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getGroupByRole(payload)
}

export const createGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.createGroup(payload)
}

export const updateGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.updateGroup(payload)
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

export const getMemberInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getMemberInGroup(payload)
}

export const getMemberRequestInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.getMemberRequestInGroup(payload)
}

export const searchMemberInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.searchMemberInGroup(payload)
}

export const searchMemberRequestInGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.searchMemberRequestInGroup(payload)
}

export const requestToJoinGroup = (idGroup) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.requestToJoinGroup(idGroup)
}

export const cancelRequestToJoinGroup = (idGroup) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.cancelRequestToJoinGroup(idGroup)
}

export const rejectRequestToJoinGroup = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.rejectRequestToJoinGroup(payload)
}
export const confirmMemberRequest = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.confirmMemberRequest(payload)
}
export const cancelMemberRequest = (payload) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.cancelMemberRequest(payload)
}
export const searchGroupByName = (name) =>{
    const groupRequest = new GroupRequest()
    return groupRequest.searchGroupByName(name)
}
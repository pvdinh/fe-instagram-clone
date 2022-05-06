import BaseRequest from "./BaseRequest";

class GroupRequest extends BaseRequest {
    getGroupByRole(payload){
        let url = `group/${payload.role}/group-role?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    createGroup(payload){
        let url = `group`
        return this.post(url,payload)
    }
    addMemberIntoGroup(payload){
        let url = `group/add-member`
        return this.post(url,payload)
    }
    getGroupByIdGroupAndIdUser(idGroup){
        let url = `group/${idGroup}`
        return this.get(url)
    }
    getAllPostInGroup(payload){
        let url = `group/${payload.idGroup}/posts?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    fetchAllPostInGroup(payload){
        let url = `group/${payload.idGroup}/posts?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    getAllPostInAllGroupSelf(payload){
        let url = `group/posts?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    fetchAllPostInAllGroupSelf(payload){
        let url = `group/posts?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    getMemberInGroup(payload){
        let url = `group/${payload.idGroup}/get-member?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    getMemberRequestInGroup(payload){
        let url = `group/${payload.idGroup}/get-member-request?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    searchMemberInGroup(payload){
        let url = `group/${payload.idGroup}/search-member?search=${payload.search}&page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    searchMemberRequestInGroup(payload){
        let url = `group/${payload.idGroup}/search-member-request?search=${payload.search}&page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    requestToJoinGroup(idGroup){
        let url = `group/${idGroup}/request-join-group`
        return this.post(url)
    }
    cancelRequestToJoinGroup(idGroup){
        let url = `group/${idGroup}/cancel-request-join-group`
        return this.delete(url)
    }
    rejectRequestToJoinGroup(payload){
        let url = `group/${payload.idGroup}/reject-request-join-group?idUser=${payload.idUser}`
        return this.delete(url)
    }
    confirmMemberRequest(payload){
        let url = `group/${payload.idGroup}/confirm-member-request`
        return this.put(url,payload)
    }
    cancelMemberRequest(payload){
        let url = `group/${payload.idGroup}/cancel-member-request`
        return this.delete(url,payload)
    }
    searchGroupByName(name){
        let url = `group/${name}/search`
        return this.get(url)
    }
}
export default GroupRequest
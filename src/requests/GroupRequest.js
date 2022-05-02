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
}
export default GroupRequest
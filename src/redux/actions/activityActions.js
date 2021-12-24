const type = {
    GET_ALL_ACTIVITY:"GET_ALL_ACTIVITY",
    GET_ALL_ACTIVITY_SUCCESS:"GET_ALL_ACTIVITY_SUCCESS",
    UPDATE_STATUS_ACTIVITY:"UPDATE_STATUS_ACTIVITY",
}
const action = {
    getAllActivity:(payload)=>{
        return{
            type:type.GET_ALL_ACTIVITY,
            payload:payload,
        }
    },
    updateStatusActivity:(data,callback)=>{
        return{
            type:type.UPDATE_STATUS_ACTIVITY,
            data:data,
            callback,
        }
    },
}
export default {type, action}
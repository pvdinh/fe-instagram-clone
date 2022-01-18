const type={
    SEND_FEEDBACK:"SEND_FEEDBACK",
}
const action={
    sendFeedback:(data,callback)=>{
        return{
            type:type.SEND_FEEDBACK,
            data:data,
            callback,
        }
    }
}
export default {type,action}
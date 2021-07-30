const type={
    FIND_ALL_MESSAGE_BY_SENDER:"FIND_ALL_MESSAGE_BY_SENDER",
    FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER:"FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER",
    POST_MESSAGE:"POST_MESSAGE",
    FIND_ALL_MESSAGE_BY_SENDER_SUCCESS:"FIND_ALL_MESSAGE_BY_SENDER_SUCCESS",
    FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER_SUCCESS:"FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER_SUCCESS",
    POST_MESSAGE_SUCCESS:"POST_MESSAGE_SUCCESS",
}
const action={
    findAllBySender:()=>{
        return{
            type:type.FIND_ALL_MESSAGE_BY_SENDER,
        }
    },
    findAllBySenderAndReceiver:(receiver)=>{
        return{
            type:type.FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER,
            id:receiver,
        }
    },
    postMessage:(message,callback)=>{
        return{
            type:type.POST_MESSAGE,
            payload:{
                data:message,
            },
            callback,
        }
    },
}
export default {type,action}
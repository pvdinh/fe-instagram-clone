import messageActions from "../actions/messageActions";

const initState = {
    listMessageOfSender: [],
    listMessageOfSenderAndReceiver: {},
}
const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_SUCCESS:
            return {...state,listMessageOfSender: action.data}
        case messageActions.type.FIND_ALL_MESSAGE_BY_SENDER_AND_RECEIVER_SUCCESS:
            return {...state,listMessageOfSenderAndReceiver: action.data}
        default:
            return {...state}
    }
}
export default messageReducer
import MessageRequest from "../requests/MessageRequest";

export const findAllBySender = () =>{
    let messageRequest = new MessageRequest()
    return messageRequest.findAllBySender()
}
export const findAllBySenderAndReceiver = (receiver) =>{
    let messageRequest = new MessageRequest()
    return messageRequest.findAllBySenderAndReceiver(receiver)
}
export const postMessage = (message) =>{
    let messageRequest = new MessageRequest()
    return messageRequest.postMessage(message)
}
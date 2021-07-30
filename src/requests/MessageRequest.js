import BaseRequest from "./BaseRequest";

export default class MessageRequest extends BaseRequest{
    findAllBySender(){
        let url = 'message/sender'
        return this.get(url)
    }
    findAllBySenderAndReceiver(receiver){
        let url = `${receiver}/receiver`
        return this.get(url)
    }
    postMessage(message){
        let url = 'message'
        return this.post(url,message)
    }
}
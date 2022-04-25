import BaseRequest from "./BaseRequest";

export default class MessageRequest extends BaseRequest{
    findAllBySender(){
        let url = 'message/sender'
        return this.get(url)
    }
    findAllBySenderAndReceiver(payload){
        let url = `message/${payload.receiver}/receiver?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    postMessage(message){
        let url = 'message'
        return this.post(url,message)
    }
    findReceiverByUsername(search){
        let url = `message/${search}/suggested`
        return this.post(url)
    }
}
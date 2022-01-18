import BaseRequest from "./BaseRequest";

class FeedbackRequest extends BaseRequest{
    sendFeedback(data){
        let url="feedback"
        return this.post(url,data)
    }
}
export default FeedbackRequest
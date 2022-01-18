import FeedbackRequest from "../requests/FeedbackRequest";

export const sendFeedback = (data) =>{
    const feedbackRequest = new FeedbackRequest()
    return feedbackRequest.sendFeedback(data)
}
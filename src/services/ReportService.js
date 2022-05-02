import ReportRequest from "../requests/ReportRequest";

export const reportPost = (data) =>{
    const reportRequest = new ReportRequest()
    return reportRequest.reportPost(data)
}
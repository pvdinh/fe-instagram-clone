import ReportRequest from "../requests/reportRequest";

export const reportPost = (data) =>{
    const reportRequest = new ReportRequest()
    return reportRequest.reportPost(data)
}
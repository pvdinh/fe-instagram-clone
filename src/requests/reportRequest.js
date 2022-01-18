import BaseRequest from "./BaseRequest";

class ReportRequest extends BaseRequest{
    reportPost(data){
        let url = "report"
        return this.post(url,data)
    }
}
export default ReportRequest
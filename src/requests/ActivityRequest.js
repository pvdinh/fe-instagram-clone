import BaseRequest from "./BaseRequest";

class ActivityRequest extends BaseRequest{
    getAllActivity(payload){
        let url = `activity?page=${payload.page}&size=${payload.size}`
        return this.get(url)
    }
    updateStatusActivity(data){
        let url = `activity`
        return this.put(url,data)
    }
}
export default ActivityRequest
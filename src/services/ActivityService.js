import ActivityRequest from "../requests/ActivityRequest";

export const getAllActivity = (payload) =>{
    const activityRequest = new ActivityRequest()
    return activityRequest.getAllActivity(payload)
}

export const updateStatusActivity = (data) =>{
    const activityRequest = new ActivityRequest()
    return activityRequest.updateStatusActivity(data)
}
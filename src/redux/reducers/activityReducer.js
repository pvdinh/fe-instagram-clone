import activityActions from "../actions/activityActions";

const initState ={
    listActivities:[],
}
const activityReducer = (state = initState,action) =>{
    switch (action.type) {
        case activityActions.type.GET_ALL_ACTIVITY_SUCCESS:
            return {...state,listActivities: [...state.listActivities,...action.data]}
        default:
            return {...state}
    }
}
export default activityReducer
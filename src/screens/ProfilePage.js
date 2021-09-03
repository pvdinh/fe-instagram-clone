import {connect} from "react-redux";
import ProfileComponent from "../components/profile/ProfileComponent";
import profileAction from "../redux/actions/profileAction";

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
        currentUserAccountSetting:state.profile.currentUserAccountSetting,
        listPostDetails:state.profile.listPostDetails,
        listSavedPostDetails: state.profile.listSavedPostDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile:(username,callback,history)=>{
            dispatch(profileAction.action.getUserProfile(username,callback,history))
        },
        getSavedPost: (username, callback, history) => {
            dispatch(profileAction.action.getSavedPost(username, callback, history))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent)
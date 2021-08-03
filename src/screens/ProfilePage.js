import {connect} from "react-redux";
import ProfileComponent from "../components/profile/ProfileComponent";
import profileAction from "../redux/actions/profileAction";

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
        currentUserAccountSetting:state.profile.currentUserAccountSetting,
        listPostDetails:state.profile.listPostDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile:(username,callback)=>{
            dispatch(profileAction.action.getUserProfile(username,callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent)
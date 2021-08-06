import profileAction from "../../redux/actions/profileAction";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import HavePostsComponents from "../profile/HavePostsComponents";
import {useHistory} from "react-router";
import HaveNotPostsComponents from "../profile/HaveNotPostsComponents";


function MorePostComponent(props) {
    let history = useHistory()

    useEffect(()=>{
        console.log(props)
        props.getUserProfile(props.username,()=>{},history)
    },[props.username])


    return(
        <div>
            {
                props.listPostDetails.length > 0 ?
                    <HavePostsComponents listPostDetails={props.listPostDetails} currentUserAccountSetting={props.currentUserAccountSetting} />
                    :
                     null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUserAccountSetting:state.profile.currentUserAccountSetting,
        listPostDetails:state.profile.listPostDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile:(username,callback,history)=>{
            dispatch(profileAction.action.getUserProfile(username,callback,history))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MorePostComponent)
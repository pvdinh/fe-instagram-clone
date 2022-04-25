import {connect} from "react-redux";
import MessageComponent from "../components/message/MessageComponent";
import messageActions from "../redux/actions/messageActions";
import homeActions from "../redux/actions/homeActions";

function mapStateToProps(state) {
    return {
        listMessageOfSender:state.message.listMessageOfSender,
        listMessageOfSenderAndReceiver:state.message.listMessageOfSenderAndReceiver,
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        findAllBySender:()=>{
            dispatch(messageActions.action.findAllBySender())
        },
        findAllBySenderAndReceiver:(receiver,payload,callback)=>{
            dispatch(messageActions.action.findAllBySenderAndReceiver(receiver,payload,callback))
        },
        postMessage:(message,callback)=>{
            dispatch(messageActions.action.postMessage(message,callback))
        },
        getUserAccountProfile: (callback) => {
            dispatch(homeActions.action.getUserAccountProfile(callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageComponent)
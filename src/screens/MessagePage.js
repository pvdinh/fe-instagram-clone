import {connect} from "react-redux";
import MessageComponent from "../components/message/MessageComponent";
import messageActions from "../redux/actions/messageActions";

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
        findAllBySenderAndReceiver:(receiver)=>{
            dispatch(messageActions.action.findAllBySenderAndReceiver(receiver))
        },
        postMessage:(message,callback)=>{
            dispatch(messageActions.action.postMessage(message,callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageComponent)
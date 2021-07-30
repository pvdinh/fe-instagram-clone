import {connect} from "react-redux";
import MessageComponent from "../components/message/MessageComponent";

function mapStateToProps(state) {
    return {
        listMessageOfSender:state.message.listMessageOfSender,
        listMessageOfSenderAndReceiver:state.message.listMessageOfSenderAndReceiver,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageComponent)
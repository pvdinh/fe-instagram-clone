import loginActions from "../redux/actions/loginActions";
import {connect} from "react-redux";
import SignUpComponent from "../components/signup/SignUpComponent";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        register:(data) =>{
            dispatch(loginActions.action.register(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent)
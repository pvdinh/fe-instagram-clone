import loginActions from "../redux/actions/loginActions";
import {connect} from "react-redux";
import SignUpComponent from "../components/signup/SignUpComponent";

function mapStateToProps(state) {
    return {
        checkPhone:state.login.validatePhone,
        checkEmail:state.login.validateEmail,
        checkUsername:state.login.validateUsername,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register:(data) =>{
            dispatch(loginActions.action.register(data))
        },
        validatePhone:(s) =>{
            dispatch(loginActions.action.validatePhone(s))
        },
        validateEmail:(s) =>{
            dispatch(loginActions.action.validateEmail(s))
        },
        validateUsername:(s) =>{
            dispatch(loginActions.action.validateUsername(s))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent)
import {connect} from "react-redux";
import LoginComponent from "../components/login/LoginComponent";
import loginActions from "../redux/actions/loginActions";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login:(username,password) =>{
            dispatch(loginActions.action.login(username,password))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)
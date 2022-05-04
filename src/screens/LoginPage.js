import {connect} from "react-redux";
import LoginComponent from "../components/login/LoginComponent";
import loginActions from "../redux/actions/loginActions";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login:(username,password,callback) =>{
            dispatch(loginActions.action.login(username,password,callback))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)
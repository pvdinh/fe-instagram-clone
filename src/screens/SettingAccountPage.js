import {connect} from "react-redux";
import SettingAccount from "../components/account-setting/SettingAccount";

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingAccount)
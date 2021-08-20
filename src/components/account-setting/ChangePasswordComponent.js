import React, {useState} from "react";
import {connect} from "react-redux";

function ChangePasswordComponent() {
    const [checkSubmit, setCheckSubmit] = useState(true)

    return(
        <div className="wrap-body-change-password-account-setting">
            <div className="body-change-password-account-setting">
                <div className="form-group">
                    <div className="wrap-label">
                        <label>Old Password</label>
                    </div>
                    <div className="wrap-input">
                        <input/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label">
                        <label>New Password</label>
                    </div>
                    <div className="wrap-input">
                        <input/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label">
                        <label>Confirm New Password</label>
                    </div>
                    <div className="wrap-input">
                        <input/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label"></div>
                    <div className="wrap-input">
                        {
                            checkSubmit ?
                                <button type="button" className="bnt-submit-change" >Change Password</button>
                                :
                                <button type={"button"} className="bnt-submit-change-disable">Change Password</button>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label"></div>
                    <div className="wrap-input">
                        <a className="link">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordComponent)
import React, {useState} from "react";
import {connect} from "react-redux";
import profileAction from "../../redux/actions/profileAction";

function ChangePasswordComponent(props) {
    const [checkSubmit, setCheckSubmit] = useState(false)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const checkSubmitChange = () =>{
        if(oldPassword.split(" ").join("") !== "" && newPassword.split(" ").join("") !== "" && confirmNewPassword.split(" ").join("") !== "")
        {
            setCheckSubmit(true)
        }else setCheckSubmit(false)
    }
    const onChangeOldPassword = (e) =>{
        setOldPassword(e.target.value)
        checkSubmitChange()
    }
    const onChangeNewPassword = (e) =>{
        setNewPassword(e.target.value)
        checkSubmitChange()
    }
    const onChangeConfirmNewPassword = (e) =>{
        setConfirmNewPassword(e.target.value)
        checkSubmitChange()
    }
    const onSubmit = () =>{
        let elementAlert = document.getElementsByClassName("alertSubmitUserAccount")
        elementAlert[0].classList.add("show")
        const setTimeOut = setTimeout(()=>{
            elementAlert[0].classList.remove("show")
        },4000)
        if(newPassword !== confirmNewPassword){
            props.setAlertSubmit("Please make sure both passwords match.")
        }else {
            let data={
                oldPassword:oldPassword,
                newPassword:newPassword,
            }
            props.changePassword(data,(dt)=>{
                props.setAlertSubmit(dt)
            })
        }
    }

    return(
        <div className="wrap-body-change-password-account-setting">
            <div className="body-change-password-account-setting">
                <div className="form-group">
                    <div className="wrap-label">
                        <label>Old Password</label>
                    </div>
                    <div className="wrap-input">
                        <input type="password" value={oldPassword} onChange={(e)=>{onChangeOldPassword(e)}} onBlur={()=>{checkSubmitChange()}}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label">
                        <label>New Password</label>
                    </div>
                    <div className="wrap-input">
                        <input type="password" value={newPassword} onChange={(e)=>{onChangeNewPassword(e)}}  onBlur={()=>{checkSubmitChange()}}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label">
                        <label>Confirm New Password</label>
                    </div>
                    <div className="wrap-input">
                        <input type="password" value={confirmNewPassword} onChange={(e)=>{onChangeConfirmNewPassword(e)}} onBlur={()=>{checkSubmitChange()}}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label"></div>
                    <div className="wrap-input">
                        {
                            checkSubmit ?
                                <button type="button" className="bnt-submit-change" onClick={()=>{onSubmit()}} >Change Password</button>
                                :
                                <button type={"button"} className="bnt-submit-change-disable">Change Password</button>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <div className="wrap-label"></div>
                    <div className="wrap-input">
                        {/*<a className="link">Forgot Password?</a>*/}
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
    return {
        changePassword:(data,callback) => {
            dispatch(profileAction.action.changePassword(data,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordComponent)
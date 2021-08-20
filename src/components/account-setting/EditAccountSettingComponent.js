import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Form} from 'antd';
import profileAction from "../../redux/actions/profileAction";
import homeActions from "../../redux/actions/homeActions";

function EditAccountSettingComponent(props) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [website, setWebsite] = useState("")
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [checkSubmit, setCheckSubmit] = useState(true)

    useEffect(()=>{
        props.getPrivateInformation((data)=>{
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
        })
    },[])

    useEffect(()=>{
        setName(props.userAccountProfile.displayName)
        setUsername(props.userAccountProfile.username)
        setWebsite(props.userAccountProfile.website)
        setBio(props.userAccountProfile.description)
    },[props.userAccountProfile])

    const checkName = () => {

    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const checkUsername = () => {

    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const checkEmail = () => {

    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const checkPhoneNumber = () => {

    }
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const onChangeBio = (e) => {
        setBio(e.target.value)
        setCheckSubmit(true)
    }

    const onChangeWebsite = (e) => {
        setWebsite(e.target.value)
        setCheckSubmit(true)
    }

    const onSubmit = (e) => {
        let data = {
            displayName:name,
            username:username,
            website:website,
            bio:bio,
            email:email,
            phoneNumber:phoneNumber,
        }
        props.editUserAccountSetting(data,(dt)=>{
            props.setAlertSubmit(dt)
            props.getUserAccountProfile(()=>{})
        })
        let elementAlert = document.getElementsByClassName("alertSubmitUserAccount")
        elementAlert[0].classList.add("show")
        const setTimeOut = setTimeout(()=>{
            elementAlert[0].classList.remove("show")
        },4000)
    }

    return (
        <div>
            <div className="wrap-body-edit-account-setting">
                <div className="body-edit-account-setting">
                    <form className='form-edit-user'>
                        <div className="form-group">
                            <div style={{display: "flex", justifyContent: "flex-end"}}>
                                <div className="wrap-avatar">
                                    <img className="avatar" src={props.userAccountProfile.profilePhoto}/>
                                </div>
                            </div>
                            <div className="username">{props.userAccountProfile.displayName}
                                <div className="below-username"><a>Change Profile Photo</a></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Name</label>
                            </div>
                            <div className="wrap-input">
                                <input value={name} onChange={(e)=>{onChangeName(e)}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"></div>
                            <div className="wrap-input">
                                <div className="description-input">
                                    <div style={{marginBottom: "16px"}}>Help people discover your account by using the name
                                        you're known by: either your full name, nickname, or business name.
                                    </div>
                                    <div>You can only change your name twice within 14 days.</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Username</label>
                            </div>
                            <div className="wrap-input">
                                <input value={username} onChange={(e)=>{onChangeUsername(e)}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"></div>
                            <div className="wrap-input">
                                <div className="description-input">
                                    <div>In most cases, you'll be able to change your username back to nao_ca_vang_ for
                                        another 14 days. <a href="https://help.instagram.com/876876079327341">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Website</label>
                            </div>
                            <div className="wrap-input">
                                <input value={website} onChange={(e) => {
                                    onChangeWebsite(e)
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Bio</label>
                            </div>
                            <div className="wrap-input">
                            <textarea value={bio} onChange={(e) => {
                                onChangeBio(e)
                            }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"></div>
                            <div className="wrap-input">
                                <div className="description-input">
                                    <div style={{marginBottom: "6px", fontWeight: "600", fontSize: "14px"}}>Personal
                                        Information
                                    </div>
                                    <div>Provide your personal information, even if the account is used for a business, a
                                        pet or something else. This won't be a part of your public profile.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Email</label>
                            </div>
                            <div className="wrap-input">
                                <input value={email} onChange={(e)=>{onChangeEmail(e)}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"><label className="label">Phone Number</label>
                            </div>
                            <div className="wrap-input">
                                <input value={phoneNumber} onChange={(e)=>{onChangePhoneNumber(e)}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="wrap-label"></div>
                            <div className="wrap-input">
                                {
                                    checkSubmit ?
                                        <button type="button" className="bnt-submit-change" onClick={()=>{onSubmit()}}>Submit</button>
                                        :
                                        <button type={"button"} className="bnt-submit-change-disable">Submit</button>
                                }
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserAccountProfile: (callback) => {
            dispatch(homeActions.action.getUserAccountProfile(callback))
        },
        editUserAccountSetting:(data,callback) =>{
            dispatch(profileAction.action.editUserAccountSetting(data,callback))
        },
        getPrivateInformation:(callback) =>{
            dispatch(profileAction.action.getPrivateInformation(callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountSettingComponent)
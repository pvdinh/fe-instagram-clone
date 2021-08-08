import React from "react";
import {connect} from "react-redux";
import {Form} from 'antd';

function EditAccountSettingComponent() {

    const checkName = () =>{

    }
    const onChangeName = (e) =>{

    }
    const checkUsername = () =>{

    }
    const onChangeUsername = (e) =>{

    }
    const checkEmail = () =>{

    }
    const onChangeEmail = (e) =>{

    }
    const checkPhoneNumber = () =>{

    }
    const onChangePhoneNumber = (e) =>{

    }

    return (
        <div className="wrap-body-edit-account-setting">
            <div className="body-edit-account-setting">
                <form className='form-edit-user'>
                    <div className="form-group">
                        <div style={{display: "flex",justifyContent: "flex-end"}}>
                            <div className="wrap-avatar">
                                <img className="avatar" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1650928958429403&width=1000&ext=1628922210&hash=AeRO-KkYV8H0OSfRRT0"/>
                            </div>
                        </div>
                        <div className="username">nao_ca_vang_
                            <div className="below-username"><a>Change Profile Photo</a></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Name</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <input/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"></div>
                        <div className="wrap-input">
                            <div className="description-input">
                                <div style={{marginBottom:"16px"}}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</div>
                                <div>You can only change your name twice within 14 days.</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Username</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <input/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"></div>
                        <div className="wrap-input">
                            <div className="description-input">
                                <div>In most cases, you'll be able to change your username back to nao_ca_vang_ for another 14 days. <a href="https://help.instagram.com/876876079327341">Learn More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Website</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <input/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Bio</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <textarea/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"></div>
                        <div className="wrap-input">
                            <div className="description-input">
                                <div style={{marginBottom:"6px",fontWeight:"600",fontSize:"14px"}}>Personal Information</div>
                                <div>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Email</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <input />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="wrap-label"><label className="label">Phone Number</label>
                        </div>
                        <div className="wrap-input">
                            <Form.Item hasFeedback validateStatus="success">
                                <input />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="form-group">
                    <div className="wrap-label"></div>
                    <div className="wrap-input">
                        <button className="bnt-submit-change">Submit</button>
                    </div>
                </div>

                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountSettingComponent)
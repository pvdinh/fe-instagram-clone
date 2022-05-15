import React, {useEffect, useState} from "react";
import {Form, Input, Modal, Select} from "antd";
import {connect} from "react-redux";
import groupAction from "../../../redux/actions/groupAction";

const {TextArea} = Input;
const {Option} = Select;

function ModalUpdateGroup(props) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [privacy, setPrivacy] = useState("")

    useEffect(() => {
        setName(props.groupInformation.name)
        setDescription(props.groupInformation.description)
        props.groupInformation.privacy === 0 ? setPrivacy("0") : setPrivacy("1")
    }, [props.visible])

    const onCancel = () => {
        props.setVisible()
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangePrivacy = (e) => {
        setPrivacy(e)
    }

    const onSubmit = () => {
        let data = {...props.groupInformation}
        data.name = name
        data.description = description
        data.privacy = privacy
        props.updateGroup(data, (m) => {
            if (m === "success") {
                props.getGroupByIdGroupAndIdUser(props.groupInformation.id,()=>{})
                props.setVisible()
                props.reload()
            } else {
                let elementAlert = document.getElementsByClassName("alertCreateGroupDuplicate")
                elementAlert[0].classList.add("show")
                const setTimeOut = setTimeout(() => {
                    elementAlert[0].classList.remove("show")
                }, 2000)
            }
        })
    }

    return (
        <div>
            <Modal centered visible={props.visible} onCancel={() => {
                onCancel()
            }} bodyStyle={{height: "auto"}} width={500} className='wrap-modal-display-liked-post'
                   title={(<div className="wrap-title-modal-display-liked-post">
                       <div></div>
                       <div className="content-title">Update information group</div>
                       <div className="icon-close" onClick={() => {
                           onCancel()
                       }}>
                           <svg aria-label="Close" className="_8-yf5 " color="#262626" fill="#262626" height="24"
                                role="img"
                                viewBox="0 0 24 24" width="24">
                               <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line>
                               <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line>
                           </svg>
                       </div>
                   </div>)}
                   footer={null} closable={false}>
                <div className="wrap-modal-body-feedback">
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={() => {
                            onSubmit()
                        }}
                        onFinishFailed={() => {
                        }}
                        autoComplete="off"
                    >
                        <div
                            className="wrap-form-item-1" style={{display: "flex"}}
                        >
                            <label style={{flex: "0 0 33.33333333%", textAlign: "end"}}>name group: &nbsp;</label>
                            <Input placeholder="Name group" maxLength={50} value={name} onChange={(e) => {
                                onChangeName(e)
                            }}/>
                        </div>
                        <Form.Item
                            label="description"
                            name="Description group"
                            className="wrap-form-item-1"
                        >
                            <div className="wrap-subject">
                                <TextArea showCount style={{height: "100px"}} maxLength={500} value={description}
                                          placeholder="Description" onChange={(e) => {
                                    onChangeDescription(e)
                                }}/>
                            </div>
                        </Form.Item>
                        <div
                            className="wrap-form-item-1" style={{display: "flex"}}
                        >
                            <label style={{flex: "0 0 33.33333333%", textAlign: "end"}}>privacy: &nbsp;</label>
                            <Select placeholder="select privacy"
                                    defaultValue={privacy} onChange={(e) => {
                                onChangePrivacy(e)
                            }}>
                                <Option value="0">Public(Anyone can see.)</Option>
                                <Option value="1">Private(Only members can see.)</Option>
                            </Select>
                        </div>
                        <Form.Item wrapperCol={{offset: 8, span: 16}} className="wrap-form-item-2">
                            <div className="wrap-btn-1">
                                <button className="btn-close" onClick={() => {
                                    onCancel()
                                }}>Cancel
                                </button>
                                {
                                    name === "" ?
                                        <button htmlType="button" style={{opacity:"0.5"}} disabled className="btn-close">Update</button>
                                        :
                                        <button htmlType="submit" className="btn-close">Update</button>

                                }
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        groupInformation: state.group.groupInformation,
        userAccountProfile: state.home.userAccountProfile,
        userMemberGroup: state.group.userMemberGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateGroup: (data, callback) => {
            dispatch(groupAction.action.updateGroup(data, callback))
        },
        getGroupByIdGroupAndIdUser: (idGroup,callback) =>{
            dispatch(groupAction.action.getGroupByIdGroupAndIdUser(idGroup,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateGroup)
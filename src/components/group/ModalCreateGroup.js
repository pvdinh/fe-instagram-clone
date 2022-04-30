import React, {useEffect, useState} from "react";
import {Form, Input, Modal, Select} from "antd";
import {connect} from "react-redux";
const { TextArea } = Input;
const { Option } = Select;
function ModalCreateGroup(props) {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [privacy,setPrivacy] = useState("")

    const onCancel = () =>{
        props.setVisible()
    }

    const onChangeName = (e) =>{
        setName(e.target.value)
    }
    const onChangeDescription = (e) =>{
        setDescription(e.target.value)
    }
    const onChangePrivacy = (e) =>{
        setPrivacy(e)
    }

    const onSubmit = () =>{
        let data = {
            name:name,
            description:description,
            privacy:privacy,
        }
        console.log(data)
    }

    return(
        <div>
            <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} bodyStyle={{height: "auto"}} width={500} className='wrap-modal-display-liked-post'
                   title={(<div className="wrap-title-modal-display-liked-post">
                       <div></div>
                       <div className="content-title">Create group</div>
                       <div className="icon-close" onClick={()=>{onCancel()}}>
                           <svg aria-label="Close" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
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
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={()=>{onSubmit()}}
                        onFinishFailed={()=>{}}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="Name group"
                            label="name group"
                            rules={[{ required: true, message: 'Please input Subject!' }]}
                            className="wrap-form-item-1"
                        >
                            <Input placeholder="Subject" maxLength={100} value={name} onChange={(e)=>{onChangeName(e)}} />
                        </Form.Item>
                        <Form.Item
                            label="description"
                            name="Description group"
                            className="wrap-form-item-1"
                        >
                            <div className="wrap-subject">
                                <TextArea showCount style={{height:"100px"}} maxLength={500} value={description} placeholder="Content" onChange={(e)=>{onChangeDescription(e)}} />
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="privacy"
                            label="privacy"
                            rules={[{ required: true, message: 'Please select privacy!' }]}
                            className="wrap-form-item-1"
                        >
                            <Select placeholder="select privacy" onChange={(e)=>{onChangePrivacy(e)}}>
                                <Option value="1">Public(Anyone can see.)</Option>
                                <Option value="2">Private(Only members can see.)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="wrap-form-item-2">
                            <div className="wrap-btn-1">
                                <button className="btn-close" onClick={()=>{onCancel()}} >Cancel</button>
                                <button htmlType="submit" className="btn-close" >Create</button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}
function mapStateToProps(state) {
    return{}
}
function mapDispatchToProps(dispatch) {
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalCreateGroup)
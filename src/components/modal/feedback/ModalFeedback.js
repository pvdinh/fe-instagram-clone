import React, {useEffect, useState} from "react";
import {Form, Input, Modal} from "antd";
import {connect} from "react-redux";
import feedbackActions from "../../../redux/actions/feedbackActions";
const { TextArea } = Input;
function ModalFeedback(props) {

    const [subject,setSubject] = useState("")
    const [content,setContent] = useState("")

    const onCancel = () =>{
        props.setVisible()
    }

    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }
    const onChangeContent = (e) =>{
        setContent(e.target.value)
    }

    const onSendFeedback = () =>{
        let data = {
            subject:subject,
            content:content,
            dateCreated:new Date().getTime(),
        }
        props.sendFeedback(data,(data)=>{
            if(data.statusCode === 200 && data.data === "success"){
                alert("feedback success!")
            }else alert("feedback fail!")
        })
    }

    return(
        <div>
            <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} bodyStyle={{height: "auto"}} width={600} className='wrap-modal-display-liked-post'
                   title={(<div className="wrap-title-modal-display-liked-post">
                       <div></div>
                       <div className="content-title">Feedback</div>
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
                        onFinish={()=>{onSendFeedback()}}
                        onFinishFailed={()=>{}}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="subject"
                            rules={[{ required: true, message: 'Please input Subject!' }]}
                            className="wrap-form-item"
                        >
                                <Input placeholder="Subject" value={subject} onChange={(e)=>{onChangeSubject(e)}} />
                        </Form.Item>
                        <Form.Item
                            name="content"
                            rules={[{ required: true, message: 'Please input Content!' }]}
                            className="wrap-form-item"
                        >
                            <div className="wrap-subject">
                                <TextArea showCount maxLength={1000} value={content} placeholder="Content" onChange={(e)=>{onChangeContent(e)}} />
                            </div>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="wrap-form-item">
                            <div className="wrap-btn">
                                <button htmlType="submit" className="btn-close" >Send</button>
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
    return{
        sendFeedback: (data,callback)=>{
            dispatch(feedbackActions.action.sendFeedback(data,callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalFeedback)
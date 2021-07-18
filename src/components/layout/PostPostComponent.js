import React, {useState} from "react";
import {Modal} from "antd";
import {Avatar, Image} from 'antd';
import {AiOutlineClose, BiArrowBack} from "react-icons/all";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


function PostPostComponent(props) {
    const [pathUrl, setPathUrl] = useState("")
    const [imageUpload, setImageUpload] = useState("")
    const [caption, setCaption] = useState("")
    const [post, setPost] = useState({})
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalShareVisible, setIsModalShareVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleNextBnt = () => {
        setIsModalVisible(false);
        setIsModalShareVisible(true)
    };
    const handleBackBtn = () => {
        setIsModalVisible(true);
        setIsModalShareVisible(false)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleShareCancel = () => {
        setIsModalShareVisible(false);
    };

    const onChangeCaption = (e) => {
        setCaption(e.target.value)
    };

    const doSharePost = () => {
        setLoadingUpload(true)
        let data={
            "file":imageUpload,
            "upload_preset":"instagram-clone",
        }
        props.postImageToCloudinary(data,(data)=>{
            let post={
                id:'',
                caption: caption,
                imagePath: data.url,
                tags: '',
                dateCreated: new Date().getTime(),
            }
            props.postNewPost(post)
            setIsModalShareVisible(false);
            setLoadingUpload(false)
            setCaption("")
        })
    };

    const onChangeUploadImage = (e) => {
        if (e.target.files[0]) {
            setPathUrl(URL.createObjectURL(e.target.files[0]))
            setImageUpload(e.target.files[0])
            setIsModalVisible(true)
        } else {
            setIsModalVisible(true)
        }

    }

    return (
        <div>
            <label href="#" style={{cursor: "pointer"}} htmlFor="file-upload">
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x={3}
                        y={3}
                        width={18}
                        height={18}
                        rx={5}
                        stroke="var(--text-dark)"
                        strokeWidth="1.8"
                    />
                    <line
                        x1="12.1"
                        y1="6.9"
                        x2="12.1"
                        y2="17.1"
                        stroke="var(--text-dark)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <line
                        x1="6.9"
                        y1="11.8"
                        x2="17.1"
                        y2="11.8"
                        stroke="var(--text-dark)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            </label>
            <input id="file-upload" type="file" accept="image/*" onClick={(event) => {
                event.target.value = null
            }} style={{display: "none"}} onChange={(e) => {
                onChangeUploadImage(e)
            }}/>
            <Modal className="wrap-modal-new-post" visible={isModalVisible} footer={null} onClick={(event) => {
                event.target.value = null
            }} onCancel={() => {
                handleCancel()
            }} title={(<div className="wrap-header-new-post">
                <div className="icon-close">
                    <AiOutlineClose/>
                </div>
                <div className="title-div">New Post</div>
                <div className="next-div" onClick={() => handleNextBnt()}>Next</div>
            </div>)}
                   closable={false}>
                <img src={pathUrl} style={{width: "100%"}}/>
            </Modal>
            <Modal className="wrap-modal-new-post" visible={isModalShareVisible} footer={null} onClick={(event) => {
                event.target.value = null
            }} onCancel={() => {
                handleShareCancel()
            }} title={(<div className="wrap-header-new-post">
                <div className="icon-close" onClick={() => {
                    handleBackBtn()
                }}>
                    <BiArrowBack/>
                </div>
                <div className="title-div">New Post</div>
                {
                    loadingUpload ? <div className="next-div"><Spin indicator={antIcon} /></div> : <div className="next-div" onClick={()=>{doSharePost()}}>Share</div>
                }
            </div>)}
                   closable={false}>
                <div className="content-new-post">
                    <div className="avatar-user"><Avatar
                        src={props.userAccountProfile.profilePhoto}/></div>
                    <div className="description-post">
                        <textarea className="description-text" placeholder="Write a caption ..." onChange={(e)=>{onChangeCaption(e)}}></textarea>
                    </div>
                    <div className="image-post"><img src={pathUrl} style={{width: "100%"}}/>
                    </div>
                </div>
            </Modal>
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
        postNewPost: (data,callback) => {
            dispatch(postActions.action.postNewPost(data,callback))
        },
        postImageToCloudinary: (data,callback) => {
            dispatch(postActions.action.postImageToCloudinary(data,callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostPostComponent)
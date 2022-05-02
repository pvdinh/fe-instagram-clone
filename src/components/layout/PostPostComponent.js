import React, {useState} from "react";
import {Modal, Select} from "antd";
import {Avatar, Image} from 'antd';
import {AiOutlineClose, BiArrowBack} from "react-icons/all";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ModalEditVideoBeforeUpload from "./modal-post-video/ModalEditVideoBeforeUpload";
const { Option } = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


function PostPostComponent(props) {
    const [pathUrl, setPathUrl] = useState("")
    const [imageUpload, setImageUpload] = useState("")
    const [videoUrl,setVideoUrl] = useState("")
    const [videoUpload, setVideoUpload] = useState("")
    const [caption, setCaption] = useState("")
    const [post, setPost] = useState({})
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleVideo, setIsModalVisibleVideo] = useState(false);
    const [isModalShareVisible, setIsModalShareVisible] = useState(false);
    const [isModalSelectFromComputer,setIsModalSelectFromComputer] = useState(false)
    const [privacy,setPrivacy] = useState("")

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
        setIsModalSelectFromComputer(false)
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
    const handleSelectFromComputerCancel = () => {
        setIsModalSelectFromComputer(false);
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
        console.log(imageUpload.name)
        props.postImageToCloudinary(data,(data)=>{
            let post={
                id:'',
                caption: caption,
                imagePath: data.url,
                type:"image",
                tags: '',
                dateCreated: new Date().getTime(),
                privacy:privacy,
            }
            props.postNewPost(post)
            setIsModalShareVisible(false);
            setLoadingUpload(false)
            setCaption("")
        })
    };

    const onChangeUpload = (e) => {
        if (e.target.files[0] && (e.target.files[0].size/1024/1024 <= 40)) {
            if(e.target.files[0].type.includes("video")){
                setVideoUrl(URL.createObjectURL(e.target.files[0]))
                setVideoUpload(e.target.files[0])
                setIsModalVisibleVideo(true)
                setIsModalSelectFromComputer(false)
            }else {
                setPathUrl(URL.createObjectURL(e.target.files[0]))
                setImageUpload(e.target.files[0])
                setIsModalVisible(true)
                setIsModalSelectFromComputer(false)
            }
        } else {
            let elementAlert = document.getElementsByClassName("alertUploadErr")
            elementAlert[0].classList.add("show")
            const setTimeOut = setTimeout(()=>{
                elementAlert[0].classList.remove("show")
            },4000)

            setIsModalSelectFromComputer(true)
        }

    }

    const onChangePrivacy = (e) =>{
        setPrivacy(e)
    }

    return (
        <div>
            <label href="#" style={{cursor: "pointer"}} onClick={()=>{setIsModalSelectFromComputer(true)}}>
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
            <Modal className="wrap-modal-new-post" visible={isModalVisible} footer={null} onClick={(event) => {
                event.target.value = null
            }} onCancel={() => {
                handleCancel()
            }} title={(<div className="wrap-header-new-post">
                <div className="icon-close" onClick={()=>{setIsModalVisible(false)}}>
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
                    loadingUpload ? <div className="next-div"><Spin indicator={antIcon}/></div> :
                        <>
                            {
                                privacy !== "" ?
                                    <div className="next-div" onClick={() => {
                                        doSharePost()
                                    }}>Share</div>
                                    :
                                    <div className="next-div" style={{opacity:".6"}}>Share</div>
                            }
                        </>
                }
            </div>)}
                   closable={false}>
                <div className="content-new-post">
                    <div className="avatar-user"><Avatar
                        src={props.userAccountProfile.profilePhoto}/></div>
                    <div className="description-post">
                        <textarea className="description-text" placeholder="Write a caption ..." onChange={(e)=>{onChangeCaption(e)}}></textarea>
                    </div>
                    <div className="image-post"><img src={pathUrl} style={{width: "100%"}}/></div>
                </div>
                <div>
                    <Select placeholder="select privacy" onChange={(e)=>{onChangePrivacy(e)}} style={{width:"100%",marginTop:"15px"}}>
                        <Option value="1">Public(Anyone can see.)</Option>
                        <Option value="2">Private(Only members can see.)</Option>
                    </Select>
                </div>
            </Modal>
            <Modal className="wrap-select-from-computer" visible={isModalSelectFromComputer} footer={null} onClick={(event) => {
                event.target.value = null
            }} onCancel={() => {
                handleSelectFromComputerCancel()
            }} title={(<div className="wrap-header">
                <div className="icon-close" onClick={()=>{setIsModalSelectFromComputer(false)}}>
                    <AiOutlineClose style={{height: "20px",width: "20px"}} />
                </div>
                <div className="title-div">Create new Post</div>
                <div className="next-div" ></div>
            </div>)}
                   closable={false}>
                <div className="wrap-body-select-from-computer">
                    <div className="center-select-from-computer">
                        <div className="wrap-logo">
                            <svg aria-label="Icon to represent media such as images or videos" className="_8-yf5 "
                                 color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3"
                                 width="96">
                                <path
                                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                    fill="currentColor"></path>
                                <path
                                    d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                    fill="currentColor"></path>
                                <path
                                    d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="wrap-title">Select photos and videos</div>
                        <div className="wrap-btn"><label className="btn"  htmlFor="file-upload">Select from computer</label></div>
                        <input id="file-upload" type="file" accept="video/mp4,video/x-m4v,video/*,image/*" onClick={(event) => {
                            event.target.value = null
                        }} style={{display: "none"}} onChange={(e) => {
                            onChangeUpload(e)
                        }}/>
                    </div>
                </div>
            </Modal>
            <ModalEditVideoBeforeUpload videoUrl={videoUrl} videoUpload={videoUpload} visible={isModalVisibleVideo} setVisible={()=>{setIsModalVisibleVideo(false)}} />
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
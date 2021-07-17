import React, {useState} from "react";
import {Modal} from "antd";
import {Avatar, Image} from 'antd';
import {AiOutlineClose, BiArrowBack} from "react-icons/all";


function PostPostComponent() {
    const [pathUrl, setPathUrl] = useState("")
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

    const onChangeUploadImage = (e) => {
        if (e.target.files[0]) {
            setPathUrl(URL.createObjectURL(e.target.files[0]))
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
                <div className="next-div">Share</div>
            </div>)}
                   closable={false}>
                <div className="content-new-post">
                    <div className="avatar-user"><Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></div>
                    <div className="description-post">
                        <textarea className="description-text" placeholder="Write a caption ..."></textarea>
                    </div>
                    <div className="image-post"><img src={pathUrl} style={{width: "100%"}}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PostPostComponent
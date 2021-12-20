import postActions from "../../../redux/actions/postActions";
import {connect} from "react-redux";
import {AiOutlineClose} from "react-icons/all";
import {Modal, Spin, Tooltip} from "antd";
import React, {useEffect, useState} from "react";
import Picker from 'emoji-picker-react';

import { LoadingOutlined } from '@ant-design/icons';
import ReactPlayer from "react-player";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function ModalCreatNewPostVideo(props) {
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [currentChar, setCurrentChar] = useState(0)
    const [caption, setCaption] = useState("")
    const [displayEmojiSelect, setDisplayEmojiSelect] = useState("-none")

    const onEmojiClick = (event, emojiObject) => {
        setCaption(caption + emojiObject.emoji)
    };
    const refVideoPlayer = React.createRef()

    const handleCancel = ()=>{
        props.setVisible()
    }
    const onChangeCaption = (e)=>{
        setCurrentChar(e.target.value.length)
        setCaption(e.target.value)
    }

    const doSharePost = () => {
        setLoadingUpload(true)
        let data={
            "file":props.videoUpload,
            "upload_preset":"instagram-clone",
        }
        if(props.urlCoverImageUpload !== ""){
            //upload ảnh preview sau đó upload video
            let dt={
                "file":props.urlCoverImageUpload,
                "upload_preset":"instagram-clone",
            }
            props.postImageToCloudinary(dt, (dt)=>{
                props.postImageToCloudinary(data,(data)=>{
                    let post={
                        id:'',
                        caption: caption,
                        imagePath: dt.url,
                        videoPath:data.url,
                        type:"video",
                        tags: '',
                        dateCreated: new Date().getTime(),
                    }
                    props.postNewPost(post)
                    props.setVisible()
                    setLoadingUpload(false)
                    setCaption("")
                })
            })
        }else {
            props.postImageToCloudinary(data,(data)=>{
                let post={
                    id:'',
                    caption: caption,
                    imagePath: "",
                    videoPath:data.url,
                    type:"video",
                    tags: '',
                    dateCreated: new Date().getTime(),
                }
                props.postNewPost(post)
                props.setVisible()
                setLoadingUpload(false)
                setCaption("")
            })
        }
    };

    return(
        <Modal className="wrap-modal-new-post-video" visible={props.visible} footer={null} onClick={(event) => {
            event.target.value = null
        }} onCancel={() => {
            handleCancel()
        }} title={(<div className="wrap-header-new-post">
            <div className="icon-close" onClick={()=>{handleCancel()}}>
                <svg aria-label="Back" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                     viewBox="0 0 24 24" width="24">
                    <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line>
                    <polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor"
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                </svg>
            </div>
            <div className="title-div">Create new post</div>
            {
                loadingUpload ? <div className="next-div"><Spin indicator={antIcon} /></div> : <div className="next-div" onClick={()=>{doSharePost()}} >Share</div>
            }
        </div>)}
               closable={false}>
            <div className="wrap-content-edit-video">
                <div className="wrap-video">
                    <ReactPlayer ref={refVideoPlayer} muted={true}
                                 onPlay={() => {
                                     refVideoPlayer.current.seekTo(localStorage.getItem("currentPlayer"), "seconds")
                                 }}
                                 onPause={() => {
                                     localStorage.setItem("currentPlayer",refVideoPlayer.current.getCurrentTime())
                                     if (props.light !== "") {
                                         refVideoPlayer.current.showPreview()
                                     }
                                 }} playing height="745px" width="auto" controls={true} url={props.videoUrl}
                                 light={props.light !== "" ? props.light : false}/>
                </div>
                <div className="wrap-edit-video">
                    <div className="top-create-new-post-video-cover">
                        <div className="wrap-avatar">
                            <img className="avatar" src={props.userAccountProfile.profilePhoto} />
                        </div>
                        <div className="t1">{props.userAccountProfile.username}</div>
                    </div>
                    <div className="wrap-description">
                        <textarea className="description" placeholder="Write a caption..." value={caption} onFocus={() => {
                            setDisplayEmojiSelect("-none")
                        }} onChange={(e) => {
                            onChangeCaption(e)
                        }}></textarea>
                    </div>
                    <div className="wrap-emoji">
                        <div className="emoji" onClick={()=>{setDisplayEmojiSelect("")}}>
                            <svg aria-label="Emoji" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="20"
                                 role="img" viewBox="0 0 24 24" width="20">
                                <path
                                    d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                            </svg>
                        </div>
                        <div className={"display-emoji-select" + displayEmojiSelect}>
                            <Picker disableSearchBar={true} disableAutoFocus={true} onEmojiClick={(e,o)=>{onEmojiClick(e,o)}} />
                        </div>
                        <Tooltip placement="bottom" title="Max characters.">
                            <div className="maxLength">
                                {currentChar}/2200
                            </div>
                        </Tooltip>
                    </div>
                    <div className="line-bt"></div>
                </div>
            </div>
        </Modal>
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
export default connect(mapStateToProps,mapDispatchToProps)(ModalCreatNewPostVideo)
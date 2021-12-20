import postActions from "../../../redux/actions/postActions";
import {connect} from "react-redux";
import {AiOutlineClose} from "react-icons/all";
import {Modal} from "antd";
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import ModalCreatNewPostVideo from "./ModalCreatNewPostVideo";

function ModalEditVideoBeforeUpload(props) {

    const [urlCoverImage,setUrlCoverImage] = useState("")
    const [urlCoverImageUpload,setUrlCoverImageUpload] = useState("")
    const [isModalVisibleVideo, setIsModalVisibleVideo] = useState(false);


    const refVideoPlayer = React.createRef()

    const handleCancel = ()=>{
        localStorage.setItem("currentPlayer",0)
        setUrlCoverImage("")
        props.setVisible()
    }
    const handleNextBnt = ()=>{
        localStorage.setItem("currentPlayer",0)
        setIsModalVisibleVideo(true)
    }
    const onChangeCoverImage = (e)=>{
        console.log(e)
        setUrlCoverImage(URL.createObjectURL(e.target.files[0]))
        setUrlCoverImageUpload(e.target.files[0])
    }

    return(
        <>
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
                <div className="title-div">Edit</div>
                <div className="next-div" onClick={() => handleNextBnt()}>Next</div>
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
                                         if (urlCoverImage !== "") {
                                             refVideoPlayer.current.showPreview()
                                         }
                                     }} playing height="745px" width="auto" controls={true} url={props.videoUrl}
                                     light={urlCoverImage !== "" ? urlCoverImage : false}/>
                    </div>
                    <div className="wrap-edit-video">
                        <div className="top-edit-video-cover">
                            <div className="t1">Cover photo</div>
                            <label className="t2" htmlFor="file-upload-cover-image">Select from computer</label>
                        </div>
                        <input id="file-upload-cover-image" type="file" accept="image/*" onClick={(event) => {
                            event.target.value = null
                        }} style={{display: "none"}} onChange={(e) => {onChangeCoverImage(e)}}/>
                    </div>
                </div>
            </Modal>
            <ModalCreatNewPostVideo light={urlCoverImage} videoUrl={props.videoUrl} videoUpload={props.videoUpload} urlCoverImageUpload={urlCoverImageUpload} visible={isModalVisibleVideo} setVisible={()=>{props.setVisible();setIsModalVisibleVideo(false)}} />
        </>
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
export default connect(mapStateToProps,mapDispatchToProps)(ModalEditVideoBeforeUpload)
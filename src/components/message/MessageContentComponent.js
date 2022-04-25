import React, {useState} from "react";
import {LinkPreview} from '@dhaiwat10/react-link-preview';
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";
import InputEmoji from 'react-input-emoji'
import {Player} from 'video-react';


function MessageContentComponent(props) {
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")
    const [imageUpload, setImageUpload] = useState("")
    const [imageDisplay, setImageDisplay] = useState("")
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(20)


    const onChangeMessage = (e) => {
        if (e.target.value.includes("http://") || e.target.value.includes("https://")) {
            setType("link")
        } else {
            setType("text")
        }
        setMessage(e.target.value)
    }

    const onChangesMessageE = (text) => {
        if (text.includes("http://") || text.includes("https://")) {
            setType("link")
        } else {
            setType("text")
        }
        setMessage(text)
    }

    const convertTimeStampToDate = (timeStamp) => {
        let time = new Date(timeStamp)
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        return time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + " " + time.getHours() + ":" + minute
    }

    const sendMessage = () => {
        if (message.split(" ").join("") !== "") {
            props.sendMessage(message, type)
            setMessage("")
            setType("")
        }
    }

    const onChangeUploadImage = (e) => {
        let elementAlert = document.getElementsByClassName("alertUploading")
        elementAlert[0].classList.add("show")
        if (e.target.files[0]) {
            let data = {
                "file": e.target.files[0],
                "upload_preset": "instagram-clone",
            }
            e.target.files[0].type.includes("video") ?
                props.postImageToCloudinary(data, (data) => {
                    elementAlert[0].classList.remove("show")
                    props.sendMessage(data.url, "video")
                })
                :
                props.postImageToCloudinary(data, (data) => {
                    elementAlert[0].classList.remove("show")
                    props.sendMessage(data.url, "image")
                })
        }
    }

    const fetchMessage = (e) =>{
        if(e.target.scrollTop === 0){
            console.log("XXXXX")
        }
    }

    return (
        <div className="chats">
            <div className="chat-banner">
                <div>
              <span id="chat-pic">
                <img id="pic" src={props.userAccountSettingReceiver.profilePhoto} alt="image"/>
              </span>
                </div>
                <div><i className="fas fa-info"/></div>
            </div>
            <div className="chats-body" id="chats-body" onScroll={(e)=>{fetchMessage(e)}}>
                {
                    props.messages.map((value, index) => (
                        <div>
                            {
                                value.sender !== props.userAccountProfile.id ?
                                    <div className="wrap-sender">
                                        {
                                            value.type === "link" ?
                                                <div className="receiver">
                                                    <LinkPreview url={value.message} height={"350px"}/>
                                                </div>
                                                :
                                                value.type === "image" ?
                                                    <div className="receiver">
                                                        <img className="receiver-image" src={value.message}
                                                             alt="image"/>
                                                    </div>
                                                    :
                                                    value.type === "video" ?
                                                        <div className="receiver">
                                                            <Player
                                                                playsInline
                                                                crossOrigin={'anonymous'}
                                                                src={value.message}>
                                                            </Player>
                                                        </div>
                                                        :
                                                        value.type === "replyStory" ?
                                                            <div className="receiver">
                                                                <img className="receiver-image" src={ new Date().getTime()> value.replyStory.split("(*)")[1] ? null : value.replyStory.split("(*)")[0]} alt="story not available"/>
                                                                <div style={{width:"140px",marginTop:'10px'}}><span style={{fontWeight:"600"}}>Reply to story</span> : {value.message}</div>
                                                            </div>
                                                        :
                                                        <div className="receiver">{value.message}</div>
                                        }
                                        <div
                                            className="dateMessaged">{convertTimeStampToDate(value.dateSendMessage)}</div>
                                    </div>
                                    :
                                    <div className="wrap-receiver">
                                        <div
                                            className="dateMessaged">{convertTimeStampToDate(value.dateSendMessage)}</div>
                                        {
                                            value.type === "link" ?
                                                <div className="sender">
                                                    <LinkPreview url={value.message} height={"350px"}/>
                                                </div>
                                                :
                                                value.type === "image" ?
                                                    <div className="sender" style={{minHeight: "250px"}}>
                                                        <img className="sender-image" src={value.message} alt="image"/>
                                                    </div>
                                                    :
                                                    value.type === "video" ?
                                                        <div className="sender">
                                                            <Player
                                                                playsInline
                                                                crossOrigin={'anonymous'}
                                                                src={value.message}>
                                                            </Player>
                                                        </div>
                                                        :
                                                        value.type === "replyStory" ?
                                                            <div className="sender" style={{minHeight: "250px"}}>
                                                                <img className="sender-image" src={ new Date().getTime()> value.replyStory.split("(*)")[1] ? null : value.replyStory.split("(*)")[0]} alt="story not available"/>
                                                                <div style={{width:"140px",marginTop:'10px'}}><span style={{fontWeight:"600"}}>Reply to story</span> : {value.message}</div>
                                                            </div>
                                                            :
                                                        <div className="sender">{value.message}</div>
                                        }
                                    </div>

                            }
                            <div id="heart">❤️</div>

                        </div>
                    ))
                }
            </div>
            <div className="user-input"/>
            <div className="input-msg">
                <div className="wrap-send-input">
                    {/*<textarea onInput={() => {*/}
                    {/*    auto_grow()*/}
                    {/*}} onChange={(e) => {*/}
                    {/*    onChangeMessage(e)*/}
                    {/*}} value={message} id="auto_grow" className="send-input" placeholder="Message..."/>*/}
                    <InputEmoji
                        value={message}
                        cleanOnEnter
                        onChange={(text) => {
                            onChangesMessageE(text)
                        }}
                        onEnter={() => {
                            sendMessage()
                        }}
                        placeholder="Message..."
                    />
                    <div className="image-selector">
                        <label htmlFor="image-upload" style={{cursor: "pointer"}}>
                            <svg aria-label="Add Photo or Video" className="_8-yf5 " fill="#262626" height="24"
                                 role="img"
                                 viewBox="0 0 48 48" width="24">
                                <path
                                    d="M38.5 0h-29C4.3 0 0 4.3 0 9.5v29C0 43.7 4.3 48 9.5 48h29c5.2 0 9.5-4.3 9.5-9.5v-29C48 4.3 43.7 0 38.5 0zM45 38.5c0 3.6-2.9 6.5-6.5 6.5h-29c-3.3 0-6-2.5-6.4-5.6l8.3-8.3c.1-.1.3-.2.4-.2.1 0 .2 0 .4.2l6.3 6.3c1.4 1.4 3.6 1.4 5 0L35.9 25c.2-.2.6-.2.8 0l8.3 8.3v5.2zm0-9.4l-6.2-6.2c-1.3-1.3-3.7-1.3-5 0L21.3 35.3c-.1.1-.3.2-.4.2-.1 0-.2 0-.4-.2L14.2 29c-1.3-1.3-3.7-1.3-5 0L3 35.2V9.5C3 5.9 5.9 3 9.5 3h29C42.1 3 45 5.9 45 9.5v19.6zM11.8 8.2c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
                            </svg>
                        </label>
                    </div>
                    <input id="image-upload" type="file" accept="audio/*|video/*|image/*" onClick={(event) => {
                        event.target.value = null
                    }} style={{display: "none"}} onChange={(e) => {
                        onChangeUploadImage(e)
                    }}/>
                    <button className="button-send-message" onClick={() => {
                        sendMessage()
                    }}>Send
                    </button>
                </div>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        postImageToCloudinary: (data, callback) => {
            dispatch(postActions.action.postImageToCloudinary(data, callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContentComponent)
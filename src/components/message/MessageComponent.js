import React, {useEffect, useState} from "react";
import {BASE_URL, BASE_URL_WEBSOCKET} from "../../url";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
let stompClient=null
function MessageComponent(props) {
    const [message,setMessage] = useState("")

    useEffect(()=>{
        if(props.listMessageOfSenderAndReceiver.userAccountSettingReceiver){
            //scroll to the bottom of "#chats-body"
            let myDiv = document.getElementById("chats-body");
            myDiv.scrollTop = myDiv.scrollHeight;
        }
    })

    useEffect(()=>{
        props.findAllBySender()
    },[])

    function auto_grow(element) {
        let ag=window.document.getElementById("auto_grow")
        ag.style.height = "5px";
        ag.style.height = (ag.scrollHeight)+"px";
    }
    
    const sendMessage = () =>{
        let data={
            sender:props.userAccountProfile.id,
            receiver:props.listMessageOfSenderAndReceiver.userAccountSettingReceiver.id,
            message:message,
            emotion:"",
        }
        stompClient.send("/app/chat.sendMessage",{},JSON.stringify(data))

        // props.postMessage(data,()=>{
        //     props.findAllBySenderAndReceiver(props.listMessageOfSenderAndReceiver.userAccountSettingReceiver.id)
        // })
        setMessage("")
    }
    const onConnect = (receiver)=>{
        // Subscribe to the Public Topic
        stompClient.subscribe('/inbox/public', ()=>{receive(receiver)});
    }
    const onError = ()=>{
        console.log("error connect web socket!")
    }
    const receive = (receiver)=>{
        props.findAllBySenderAndReceiver(receiver)
        props.findAllBySender()
    }

    const onChangeMessage = (e) =>{
        setMessage(e.target.value)
    }

    //dùng các thư viện : npm i sockjs-client stompjs
    //khi click vaò inbox thì sẽ connect đến WebSocket
    //phải xác nhận JWT ở headers để xác thực người dùng
    //stompClient.connect khi connect thành công, truyền vào id receiver để thực hiện lắng nghe tin nhắn
    const openInboxCurrentReceiver = (id) => {
        props.findAllBySenderAndReceiver(id,(data)=>{
            console.log(data)
            let sockjs = new SockJS(BASE_URL_WEBSOCKET+"/ws")
            let headers = {
                'Authorization': localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
                'Content-Type': 'application/json',
            }
            stompClient =Stomp.over(sockjs)
            stompClient.connect(headers,()=>{onConnect(data.userAccountSettingReceiver.id)},onError)
            stompClient.debug = null
        })
    }

    return(
        <div className="wrap-body-page-message">
            <main>
                <div className="preview">
                    <div id="user-name">{props.userAccountProfile.displayName}<i className="fas fa-angle-down"/></div>
                    {
                        props.listMessageOfSender.map((value,index)=>(
                            <div>
            <span id="pic-div">
              <img id="pic" src={value.userAccountSettingReceiver.profilePhoto} />
            </span>
                                <div id="chat-username" onClick={()=>{openInboxCurrentReceiver(value.userAccountSettingReceiver.id)}}>
                                    <span id="name">{value.userAccountSettingReceiver.displayName}</span>
                                    <span id="msg">{value.messages[value.messages.length-1].message}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    props.listMessageOfSenderAndReceiver.userAccountSettingReceiver ?
                        <div className="chats">
                            <div className="chat-banner">
                                <div>
              <span id="chat-pic">
                <img id="pic" src={props.listMessageOfSenderAndReceiver.userAccountSettingReceiver.profilePhoto} alt="image" />
              </span>
                                </div>
                                <div><i className="fas fa-info"/></div>
                            </div>
                            <div className="chats-body" id="chats-body">
                                {
                                    props.listMessageOfSenderAndReceiver.messages.map((value,index)=>(
                                        <div>
                                            {
                                                value.sender !== props.userAccountProfile.id ?
                                                    <div className="sender">{value.message}</div>
                                                    :
                                                    <div className="receiver">{value.message}</div>

                                            }
                                            <div id="heart">❤️</div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div className="user-input"/>
                            <div className="input-msg">
                                <div className="wrap-send-input">
                                    <textarea onInput={()=>{auto_grow()}} onChange={(e)=>{onChangeMessage(e)}} value={message} id="auto_grow" className="send-input" placeholder="Message..." />
                                    <button className="button-send-message" onClick={()=>{sendMessage()}}>Send</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="no-chats">
                            <div className="wrap-content-write-message">
                                <div className="m1">Your Messages</div>
                                <div className="m2">Send private photos and messages to a friend or group.</div>
                                <div className="m3">
                                    <button className="m31" >Send Message</button>
                                </div>
                            </div>
                        </div>
                }
            </main>
        </div>
    )
}
export default MessageComponent
import React, {useEffect, useState} from "react";
import {BASE_URL, BASE_URL_WEBSOCKET} from "../../url";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import ModalSelectReceiverComponent from "./ModalSelectReceiverComponent";
import MessageContentComponent from "./MessageContentComponent";
let stompClient=null
let stompClientAllInbox=null
function MessageComponent(props) {
    const [isVisible,setIsVisible] = useState(false)

    useEffect(()=>{
        props.getUserAccountProfile((data)=>{
            let sockjs = new SockJS(BASE_URL_WEBSOCKET+"/ws")
            let headers = {
                'Authorization': localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
                'Content-Type': 'application/json',
            }
            stompClientAllInbox= Stomp.over(sockjs)
            stompClientAllInbox.connect(headers,()=>{onConnectAllInbox(data.id)},()=>{onError()})
            stompClientAllInbox.debug=null
        })
    },[])

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


    useEffect(()=>{
        document.title="Inbox"
    },[])


    const sendMessage = (message,type) =>{
        let data={
            sender:props.userAccountProfile.id,
            receiver:props.listMessageOfSenderAndReceiver.userAccountSettingReceiver.id,
            message:message,
            emotion:"",
            type:type,
        }
        stompClient.send("/app/chat.sendMessage",{},JSON.stringify(data))
        stompClientAllInbox.send("/app/chat.sendMessageToAll",{},JSON.stringify(data))

        // props.postMessage(data,()=>{
        //     props.findAllBySenderAndReceiver(props.listMessageOfSenderAndReceiver.userAccountSettingReceiver.id)
        // })
    }
    const onConnect = (receiver)=>{
        // Subscribe to the Public Topic
        stompClient.subscribe('/inbox/public', ()=>{receive(receiver)});
    }
    const onConnectAllInbox = (idCurrentUser)=>{
        // Subscribe to the Public Topic
        stompClientAllInbox.subscribe('/inbox/allInbox', (payload)=>{receiveAllInbox(payload,idCurrentUser)});
    }
    const onError = ()=>{
        console.log("error connect web socket!")
    }
    const receive = (receiver)=>{
        props.findAllBySenderAndReceiver(receiver)
        props.findAllBySender()
        console.log(receiver)
        console.log(props.userAccountProfile)
    }
    //chỉ có những người là receiver hoặc sender mới phải reload lại
    const receiveAllInbox = (payload,idCurrentUser)=>{
        let mess = JSON.parse(payload.body)
        if(idCurrentUser === mess.sender || idCurrentUser === mess.receiver){
            props.findAllBySender()
        }
    }

    const onBeginChat = (receiver) =>{
        openInboxCurrentReceiver(receiver)
    }

    //dùng các thư viện : npm i sockjs-client stompjs
    //khi click vaò inbox thì sẽ connect đến WebSocket
    //phải xác nhận JWT ở headers để xác thực người dùng
    //stompClient.connect khi connect thành công, truyền vào id receiver để thực hiện lắng nghe tin nhắn
    const openInboxCurrentReceiver = (id) => {
        if(stompClient !== null) stompClient.disconnect()
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
                    <div className="wrap-user-name">
                        <div id="user-name">
                            <div className="u1">
                                {props.userAccountProfile.username} &nbsp;
                                <span style={{transform: "rotate(180deg)"}}>
                        <svg aria-label="Down Chevron Icon" className="_8-yf5 " fill="#262626" height="20" role="img"
                             viewBox="0 0 48 48" width="20">
                            <path
                                d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
                        </svg>
                    </span>
                            </div>
                        </div>
                        <div className="new-chat" onClick={()=>{setIsVisible(true)}}>
                            <svg aria-label="New Message" className="_8-yf5 " fill="#262626" height="24" role="img"
                                 viewBox="0 0 44 44" width="24">
                                <path
                                    d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
                                <path
                                    d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
                                <path
                                    d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
                            </svg>
                        </div>
                    </div>
                    <div style={{display: 'block',height:'660px',overflow: 'auto'}}>
                        {
                            props.listMessageOfSender.map((value,index)=>(
                                <div style={{display: 'flex',padding: '5px 0px'}}>
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
                </div>
                {
                    props.listMessageOfSenderAndReceiver.userAccountSettingReceiver ?
                        <MessageContentComponent userAccountProfile={props.userAccountProfile}
                                                 messages={props.listMessageOfSenderAndReceiver.messages}
                                                 sendMessage={(message,type)=>{sendMessage(message,type)}}
                                                 userAccountSettingReceiver={props.listMessageOfSenderAndReceiver.userAccountSettingReceiver}/>
                        :
                        <div className="no-chats">
                            <div className="wrap-content-write-message">
                                <div className="m1">Your Messages</div>
                                <div className="m2">Send private photos and messages to a friend or group.</div>
                                <div className="m3">
                                    <button className="m31" onClick={()=>{setIsVisible(true)}}>Send Message</button>
                                </div>
                            </div>
                        </div>
                }
            </main>
            <ModalSelectReceiverComponent receiverExisting={props.listMessageOfSender} onBeginChat={(receiver)=>onBeginChat(receiver)} isVisible={isVisible} setIsVisible={()=>{setIsVisible(!isVisible)}} />
        </div>
    )
}
export default MessageComponent
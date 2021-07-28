import React, {useEffect} from "react";

function MessageComponent() {
    useEffect(()=>{
        //scroll to the bottom of "#chats-body"
        let myDiv = document.getElementById("chats-body");
        myDiv.scrollTop = myDiv.scrollHeight;
    })
    function auto_grow(element) {
        let ag=window.document.getElementById("auto_grow")
        console.log(ag)
        ag.style.height = "5px";
        ag.style.height = (ag.scrollHeight)+"px";
    }
    return(
        <div className="wrap-body-page-message">
            <main>
                <div className="preview">
                    <div id="user-name">__fibo_freak <i className="fas fa-angle-down"/></div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/564x/af/d1/12/afd1126225d818c7c5058e11b4b260c3.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">chloe</span>
                            <span id="msg">I picked up some kambucha..</span>
                        </div>
                    </div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/474x/77/41/89/7741893db63e83fdc1d2b4437f63c68b.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">kenzo</span>
                            <span id="msg">call me when your free</span>
                        </div>
                    </div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/474x/c3/ea/10/c3ea105f7fb929fe865b37357fab0084.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">nikita</span>
                            <span id="msg">hey did you message your..</span>
                        </div>
                    </div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/474x/6f/0f/92/6f0f921e55c5cfb20e9b6e1c00d88c0e.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">betty_spaghetti</span>
                            <span id="msg">Let's go out this weekend!</span>
                        </div>
                    </div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/474x/fb/46/ef/fb46ef3c690f10321ebe6f85df9ea93f.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">nunchuck</span>
                            <span id="msg">I just finished watching peak..</span>
                        </div>
                    </div>
                    <div>
            <span id="pic-div">
              <img id="pic" src="https://i.pinimg.com/474x/1b/d5/c1/1bd5c166811f8cfaa1a741589e3890f0.jpg"/>
            </span>
                        <div id="chat-username">
                            <span id="name">snow</span>
                            <span id="msg">Did you call Ryan?</span>
                        </div>
                    </div>
                </div>
                <div className="chats">
                    <div className="chat-banner">
                        <div>
              <span id="chat-pic">
                <img id="pic" src="https://i.pinimg.com/564x/10/8b/0a/108b0a398d44292efb2fa4b755fdbf33.jpg"/>
              </span>
                        </div>
                        <div><i className="fas fa-info"/></div>
                    </div>
                    <div className="chats-body" id="chats-body">
                        <div className="sender" onClick="like()">hello! how are you?</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">heyy! much better</div>
                        <div className="sender" onClick="like()">Thats great!🥰</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">How did the interview go? was it good?</div>
                        <div className="sender" onClick="like()">Yeah. I think I did good🙈</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">Wow I'm soo happy for you</div>
                        <div className="sender" onClick="like()">Thanks for always supporting me. Means a lot💖</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">your most welcome</div>
                        <div className="sender" onClick="like()">hello! how are you?</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">heyy! much better</div>
                        <div className="sender" onClick="like()">Thats great!🥰</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">How did the interview go? was it good?</div>
                        <div className="sender" onClick="like()">Yeah. I think I did good🙈</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">Wow I'm soo happy for you</div>
                        <div className="sender" onClick="like()">Thanks for always supporting me. Means a lot💖</div>
                        <div id="heart">❤️</div>
                        <div className="receiver">your most welcome</div>
                    </div>
                    <div className="user-input"/>
                    <div className="input-msg">
                        <div className="wrap-send-input">
                            <textarea onInput={()=>{auto_grow()}} id="auto_grow" className="send-input" placeholder="Message..." />
                            <button className="button-send-message">Send</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default MessageComponent
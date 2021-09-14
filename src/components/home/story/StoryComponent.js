import React, {useEffect} from "react";

function StoryComponent() {

    useEffect(() => {
        let myDiv = document.getElementById("story-body");
        let btnLeft = document.getElementById("btn-left");
        let btnRight = document.getElementById("btn-right");
        if(myDiv.scrollLeft === 0){
            btnLeft.style.display='none'
        }
        if(myDiv.scrollWidth === myDiv.offsetWidth){
            btnRight.style.display='none'
        }
    })

    const onScroll = () => {
        let myDiv = document.getElementById("story-body");
        let btnLeft = document.getElementById("btn-left");
        let btnRight = document.getElementById("btn-right");
        if(myDiv.scrollLeft === 0){
            btnLeft.style.display='none'
        }
        if(myDiv.scrollLeft !== 0){
            btnLeft.style.display='block'
        }
        if(myDiv.scrollLeft === (myDiv.scrollWidth - myDiv.offsetWidth)){
            btnRight.style.display='none'
        }
        if(myDiv.scrollLeft < (myDiv.scrollWidth - myDiv.offsetWidth)){
            btnRight.style.display='block'
        }
    }

    const onClickLeftStory = () =>{
        let myDiv = document.getElementById("story-body");
        myDiv.scrollLeft -= 200
    }
    const onClickRightStory = () =>{
        let myDiv = document.getElementById("story-body");
        myDiv.scrollLeft += 200
    }



    return(
        <div className="stories" >
            <button className="stories__left-button" id="btn-left" onClick={()=>onClickLeftStory()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#808080"
                          d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
                </svg>
            </button>
            <div className='stories__content' id="story-body"  onScroll={()=>{onScroll()}}>
                <div style={{width:'100%',display:'flex'}} >
                    <div className="item">
                        <button className="story story--has-story">
                            <div className="story__avatar">
                                <div className="story__border">
                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="31" cy="32" cx="32"/>
                                        <defs>
                                            <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                <stop offset="0" stop-color="#f09433"/>
                                                <stop offset="0.25" stop-color="#e6683c"/>
                                                <stop offset="0.5" stop-color="#dc2743"/>
                                                <stop offset="0.75" stop-color="#cc2366"/>
                                                <stop offset="1" stop-color="#bc1888"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="story__picture">
                                    <img src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" alt="User Picture" />
                                </div>
                            </div>
                            <span className="story__user">usernick1</span>
                        </button>

                    </div>
                    <div className="item">
                        <button className="story">
                            <div className="story__avatar">
                                <div className="story__border">
                                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                        <circle r="31" cy="32" cx="32"/>
                                        <defs>
                                            <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                <stop offset="0" stop-color="#f09433"/>
                                                <stop offset="0.25" stop-color="#e6683c"/>
                                                <stop offset="0.5" stop-color="#dc2743"/>
                                                <stop offset="0.75" stop-color="#cc2366"/>
                                                <stop offset="1" stop-color="#bc1888"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="story__picture">
                                    <img src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" alt="User Picture" />
                                </div>
                            </div>
                            <span className="story__user">usernick1</span>
                        </button>

                    </div>
                </div>
            </div>
            <button className="stories__right-button" id="btn-right" onClick={()=>onClickRightStory()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#808080"
                          d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
                </svg>
            </button>
        </div>
    )
}
export default StoryComponent
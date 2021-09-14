import React, {useEffect} from "react";
import {connect} from "react-redux";
import StoryAction from "../../../redux/actions/StoryAction";
import ItemStoryComponent from "./ItemStoryComponent";

function StoryComponent(props) {

    useEffect(()=>{
        props.getAllStoryFollowing()
    },[])

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
                    {
                        props.listUserHaveStory.map((value,index) =>(
                            <ItemStoryComponent story={value.postDetails} userAccountSetting={value.userAccountSetting} />
                        ))
                    }
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
function mapStateToProps(state) {
    return {
        listUserHaveStory:state.story.listUserHaveStory,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllStoryFollowing : () =>{
            dispatch(StoryAction.action.getAllStoryFollowing())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StoryComponent)
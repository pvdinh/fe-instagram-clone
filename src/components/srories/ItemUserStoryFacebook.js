import React from "react";
import StoryAction from "../../redux/actions/StoryAction";
import {connect} from "react-redux";
import {useHistory} from "react-router";

function ItemUserStoryFacebook(props) {
    let history = useHistory()

    const calculatorDateStory = (time) => {
        let distance = Math.round((new Date().getTime() - time) / (1000))
        switch (true) {
            case 0 <= distance && distance <= 59:
                return distance + " giây"
            case 60 <= distance && distance < 3600:
                return Math.round(distance / 60) + " phút"
            case 3600 <= distance && distance < (3600 * 24):
                return Math.round(distance / (60 * 60)) + " giờ"
            default:
                break;
        }
    }

    const setCurrentDisplayStory = () =>{
        props.setCurrentDisplayStory(props.item)
        history.replace(`/stories/${props.item.userAccountSetting.username}`)
    }

    return(
        <div className="fb-item">
            <div style={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={()=>{setCurrentDisplayStory()}}>
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
                            <img src={props.item.userAccountSetting.profilePhoto} alt="User Picture" />
                        </div>
                    </div>
                </button>
                <div className="fb-item-info">
                    <div className="fb-item-info-name">{props.item.userAccountSetting.username}</div>
                    <div className="fb-item-info-time"><span className="color">{props.item.postDetails.length} thẻ mới</span><span> · </span> <span>{calculatorDateStory(props.item.postDetails[props.item.postDetails.length -1 ].dateBeginStory)}</span></div>
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
        setCurrentDisplayStory : (data) =>{
            dispatch(StoryAction.action.setCurrentDisplayStory(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemUserStoryFacebook)
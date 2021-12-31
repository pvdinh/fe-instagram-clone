import {Dropdown, Menu} from "antd";
import React, {useEffect, useState} from "react";
import loginActions from "../../../redux/actions/loginActions";
import {connect} from "react-redux";
import activityActions from "../../../redux/actions/activityActions";

function ActivityComponent(props) {

    const [page,setPage] = useState(0)
    const [size,setSize] = useState(10)
    const [noti,setNoti] = useState(false)

    useEffect(()=>{
        props.getAllActivity({page:page,size:size})
    },[])

    // // I was not using an li but may work to keep your div scrolled to the bottom as li's are getting pushed to the div
    // const objDiv = document.getElementById('div');
    // objDiv.scrollTop = objDiv.scrollHeight;

    const calculatorDayActivity = (timeActivity) => {
        let distance = Math.round((new Date().getTime() - timeActivity) / (1000))
        switch (true) {
            case 0 <= distance && distance <= 59:
                return distance + "s"
            case 60 <= distance && distance < 3600:
                return Math.round(distance / 60) + "m"
            case 3600 <= distance && distance < (3600 * 24):
                return Math.round(distance / (60 * 60)) + "h"
            case 3600 * 24 <= distance :
                return Math.round((distance / (60 * 60 * 24))) + "d"
            default:
                break;
        }
    }

    const displayLikes = (likes,activity) => {
        switch (true) {
            case likes.length === 1:
                return (
                      <span ><span className="span-activity" onClick={(e)=>{onClickActivity(likes[0],e)}} >{likes[0]}</span></span>
                )
            case likes.length === 2:
                return (
                    <span ><span className="span-activity" onClick={(e)=>{onClickActivity(likes[0],e)}}>{likes[0]}</span> and <span className="span-activity" onClick={(e)=>{onClickActivity(likes[1],e)}} >{likes[1]}</span></span>
                )
            case likes.length > 2:
                return (
                <span ><span className="span-activity" onClick={(e)=>{onClickActivity(likes[0],e)}} >{likes[0]}</span>, <span className="span-activity" onClick={(e)=>{onClickActivity(likes[1],e)}} >{likes[1]}</span> and {likes.length - 2} others</span>
            )
            default:
                return (<div></div>)
        }
    }

    const fetchActivity = (e) =>{
        const bottom = e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight;
        if(bottom){
            setPage(page+1)
            props.getAllActivity({page:page+1,size:size})
        }
    }

    const onClickActivity = (username,e) =>{
        window.location.href = `/${username}`

        // chặn onClick vào activity khi bấm vào tên người dùng
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    const redirectToPost = (pId) =>{
        let url = window.location.href;
        let arrUrl = url.split("/");
        window.location.href =arrUrl[0] + "//" + arrUrl[2] +  "/p/" + pId
    }

    const readActivity = (activity) =>{
        activity.status = 1
        props.updateStatusActivity(activity,(data)=>{
            console.log(data)
        })
    }

    const displayNoti = (status) =>{
        if(status === 0 && noti === false){
            setNoti(true)
            return(
                <div className="wrap-status-activity"></div>
            )
        }else if(status === 0){
            return(
                <div className="wrap-status-activity"></div>
            )
        }
    }

    const menuEmptyActivity = (
        <Menu className="wrap-page-home-in-header">
            <div className=" wrap-search-in-header wrap-activity-in-header" onScroll={(e)=>{fetchActivity(e)}}>
                <div className="recent-">Activities</div>
                <div className="wrap-activity">
                    {
                        props.listActivities.map((value,index)=>(
                            value.activity.typeActivity === "follow"
                                ?
                                <div className="wrap-item-activity" onClick={()=>{readActivity(value.activity);onClickActivity(value.userAccountSetting.username)}}>
                                    <div className="wrap-image-activity" onClick={()=>{readActivity(value.activity)}}>
                                        <img className="img-activity" src={value.userAccountSetting.profilePhoto}/>
                                    </div>
                                    <div className="wrap-content-activity"><span className="span-activity" onClick={()=>{readActivity(value.activity)}}>{value.userAccountSetting.username}</span> started following you.</div>
                                    <div className="wrap-date-activity">{calculatorDayActivity(value.activity.dateActivity)}</div>
                                    {
                                        displayNoti(value.activity.status)
                                    }
                                </div>
                                :
                                value.activity.typeActivity === "like"
                                    ?
                                    <div className="wrap-item-activity" onClick={()=>{redirectToPost(value.post.id);readActivity(value.activity)}}>
                                        <div className="wrap-image-activity" onClick={()=>{}}>
                                            <img className="video-activity" src={value.post.imagePath}/>
                                        </div>
                                        {
                                            value.post.type === "video"
                                            ?
                                                <div className="wrap-content-activity">{displayLikes(value.likes,value.activity)} liked your video.</div>
                                                :
                                                <div className="wrap-content-activity">{displayLikes(value.likes,value.activity)} liked your photo.</div>
                                        }

                                        <div className="wrap-date-activity">{calculatorDayActivity(value.activity.dateActivity)}</div>
                                        {
                                            displayNoti(value.activity.status)
                                        }
                                    </div>
                                    :
                                    value.activity.typeActivity === "comment"
                                        ?
                                        <div className="wrap-item-activity" onClick={()=>{redirectToPost(value.post.id);readActivity(value.activity)}}>
                                            <div className="wrap-image-activity" onClick={()=>{}}>
                                                <img className="video-activity" src={value.post.imagePath}/>
                                            </div>
                                            {
                                                value.post.type === "video"
                                                    ?
                                                    <div className="wrap-content-activity">{displayLikes(value.comments,value.activity)} commented your video.</div>
                                                    :
                                                    <div className="wrap-content-activity">{displayLikes(value.comments,value.activity)} commented your photo.</div>
                                            }

                                            <div className="wrap-date-activity">{calculatorDayActivity(value.activity.dateActivity)}</div>
                                            {
                                                displayNoti(value.activity.status)
                                            }
                                        </div>
                                :
                                null
                        ))
                    }
                </div>
            </div>
        </Menu>
    );

    return(
        <div style={{display:"inherit"}}>
            <a href="#" onClick={()=>{props.setCurrentPage()}}>
                {
                    localStorage.getItem("currentPage") === 'Activity Feed' ?
                        <Dropdown overlay={menuEmptyActivity} placement="bottomLeft" arrow trigger={['click']}>
                            <svg aria-label="Activity Feed" className="_8-yf5 " fill="#262626" height="22" role="img"
                                 viewBox="0 0 48 48" width="22">
                                <path
                                    fill="var(--text-dark)"
                                    stroke="var(--text-dark)"
                                    d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                        </Dropdown>
                        :
                        <Dropdown overlay={menuEmptyActivity} placement="bottomLeft" arrow trigger={['click']}>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                                    fill="var(--text-dark)"
                                    stroke="var(--text-dark)"
                                    strokeWidth="0.6"
                                />
                            </svg>
                        </Dropdown>
                }
            </a>
            {
                noti === true ?
                    <div style={{width:"6px",height:"6px",background:"red",textAlign:"center",borderRadius:"50%"}}></div>
                    :
                    null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listActivities: state.activity.listActivities,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllActivity: (payload) => {
            dispatch(activityActions.action.getAllActivity(payload))
        },
        updateStatusActivity: (data,callback) => {
            dispatch(activityActions.action.updateStatusActivity(data,callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ActivityComponent)
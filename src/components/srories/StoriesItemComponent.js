import {connect} from "react-redux";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import {Avatar} from "antd";
import {useHistory} from "react-router";

function StoriesItemComponent(props) {
    let history = useHistory()
    useEffect(() => {
        console.log("props", props)
        if (props.data.userAccountSetting.username === props.usernameUrl) {
            localStorage.setItem("pos", props.pos)
        }
    }, [props.usernameUrl])

    const setCurrent = () => {
        localStorage.setItem("pos", props.pos)
        history.replace(`/stories/${props.data.userAccountSetting.username}/${props.data.postDetails[0].post.id}`)
        props.setReload()
    }

    return (
        <div className="wrap-user-story" onClick={() => {
            setCurrent()
        }}>
            {
                localStorage.getItem("pos") === props.pos.toString() ?
                    <Slider {...props.settingsCurrent}>
                        {
                            props.data.postDetails.map((value, index) => (
                                <div>
                                    <div className="item-story">
                                        <div className="user-profile">
                                            <Avatar src={props.data.userAccountSetting.profilePhoto}/>&nbsp;
                                            <span
                                                className="username">{props.data.userAccountSetting.username}</span>&nbsp;&nbsp;
                                            <span className="time_add">12h</span>
                                        </div>
                                        <img className="img-story" src={value.post.imagePath}/>
                                        <div className="footer-story">
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    :
                    <>
                        {
                            props.data.postDetails.length > 1 ?
                                <Slider {...props.settings}>
                                    {
                                        props.data.postDetails.map((value, index) => (
                                            <div>
                                                <div className="item-story">
                                                    <div className="user-profile">
                                                        <Avatar src={props.data.userAccountSetting.profilePhoto}/>
                                                        <span
                                                            className="username">{props.data.userAccountSetting.username}</span>
                                                        <span className="time_add">12h</span>
                                                    </div>
                                                    <img className="img-story" src={value.post.imagePath}/>
                                                    <div className="footer-story">
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </Slider>
                                :
                                <div>
                                    <div className="item-story">
                                        <div className="user-profile">
                                            <Avatar src={props.data.userAccountSetting.profilePhoto}/>
                                            <span
                                                className="username">{props.data.userAccountSetting.username}</span>
                                            <span className="time_add">12h</span>
                                        </div>
                                        <img className="img-story" src={props.data.postDetails[0].post.imagePath}/>
                                        <div className="footer-story">
                                        </div>
                                    </div>
                                </div>
                        }
                    </>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesItemComponent)
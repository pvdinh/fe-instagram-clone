import {connect} from "react-redux";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import {Avatar} from "antd";

function StoriesItemComponent(props) {
    useEffect(() => {
        console.log("props", props)
        if (props.pos === 0) {
            localStorage.setItem("pos", props.pos)
        }
    }, [])

    const setCurrent = () => {
        localStorage.setItem("pos", props.pos)
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
                                <div>
                                    <div className="item-story">
                                        <div className="user-profile">
                                            <Avatar src={props.data.userAccountSetting.profilePhoto}/>&nbsp;
                                            <span
                                                className="username">{props.data.userAccountSetting.username}</span>&nbsp;&nbsp;
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
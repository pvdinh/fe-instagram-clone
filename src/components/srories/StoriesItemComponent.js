import {connect} from "react-redux";
import Slider from "react-slick";
import React, {useEffect, useState} from "react";
import {Avatar} from "antd";

function StoriesItemComponent(props) {
    useEffect(()=>{
        if(props.pos === 0) {
            localStorage.setItem("pos",props.pos)
        }
    },[])

    const setCurrent = () =>{
        localStorage.setItem("pos",props.pos)
        props.setReload()
    }

    return(
        <div className="wrap-user-story" onClick={()=>{setCurrent()}}>
            {
                localStorage.getItem("pos") === props.pos.toString() ?
                    <Slider {...props.settingsCurrent}>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />&nbsp;
                                    <span className="username">hihi</span>&nbsp;&nbsp;
                                    <span className="time_add">12h</span>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                <div className="footer-story">
                                </div>
                            </div>
                        </div>
                    </Slider>
                    :
                    <Slider {...props.settings}>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                    </div>
                                    <div className="username">hihi</div>
                                    <div className="time_add">12h</div>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />

                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                    </div>
                                    <div className="username">hihi</div>
                                    <div className="time_add">12h</div>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />

                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                    </div>
                                    <div className="username">hihi</div>
                                    <div className="time_add">12h</div>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />

                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                    </div>
                                    <div className="username">hihi</div>
                                    <div className="time_add">12h</div>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />

                            </div>
                        </div>
                        <div>
                            <div className="item-story">
                                <div className="user-profile">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />
                                    </div>
                                    <div className="username">hihi</div>
                                    <div className="time_add">12h</div>
                                </div>
                                <img className="img-story" src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" />

                            </div>
                        </div>
                    </Slider>
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
export default connect(mapStateToProps,mapDispatchToProps)(StoriesItemComponent)
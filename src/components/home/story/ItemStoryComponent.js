import {connect} from "react-redux";
import React from "react";
import {useHistory} from "react-router";

function ItemStoryComponent(props) {
    const history = useHistory()

    return(
        <div>
            {/*//has story*/}
            <div className="item">
                <button className="story story--has-story">
                    <div className="story__avatar" onClick={()=>{history.push("/stories/n/n")}}>
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
                            <img src={props.userAccountSetting.profilePhoto} alt="User Picture" />
                        </div>
                    </div>
                    <span className="story__user">{props.userAccountSetting.username}</span>
                </button>
            </div>
            {/*//no has story*/}
            {/*<div className="item">*/}
            {/*    <button className="story">*/}
            {/*        <div className="story__avatar">*/}
            {/*            <div className="story__border">*/}
            {/*                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                    <circle r="31" cy="32" cx="32"/>*/}
            {/*                    <defs>*/}
            {/*                        <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">*/}
            {/*                            <stop offset="0" stop-color="#f09433"/>*/}
            {/*                            <stop offset="0.25" stop-color="#e6683c"/>*/}
            {/*                            <stop offset="0.5" stop-color="#dc2743"/>*/}
            {/*                            <stop offset="0.75" stop-color="#cc2366"/>*/}
            {/*                            <stop offset="1" stop-color="#bc1888"/>*/}
            {/*                        </linearGradient>*/}
            {/*                    </defs>*/}
            {/*                </svg>*/}
            {/*            </div>*/}
            {/*            <div className="story__picture">*/}
            {/*                <img src="https://res.cloudinary.com/dinhpv/image/upload/v1631533078/instargram-clone/lanh_vnizam.jpg" alt="User Picture" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <span className="story__user">usernick1</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemStoryComponent)
import {connect} from "react-redux";
import homeActions from "../../redux/actions/homeActions";
import {useEffect, useState} from "react";

function ItemInSuggestionsToFollow(props) {
    const [statusFollow, setStatusFollow] = useState(false)

    const beginFollowing = (userFollowingId) => {
        props.beginFollowing(userFollowingId)
        setStatusFollow("Following")
    }

    return (
        <div className="side-menu__suggestion">
            <a href="#" className="side-menu__suggestion-avatar">
                <img src={props.item.profilePhoto} alt="User Picture"/>
            </a>
            <div className="side-menu__suggestion-info">
                <a href="#">{props.item.displayName}</a>
                <span>Followed by user1, user2 and 9 others</span>
            </div>
            {
                !statusFollow ?
                    <button className="side-menu__suggestion-button" onClick={() => {
                        beginFollowing(props.item.id)
                    }}>Follow</button>
                    :
                    <button className="side-menu__suggestion-button following" onClick={() => {
                        beginFollowing(props.item.id)
                    }}>Following</button>
            }
        </div>

    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        beginFollowing: (userFollowingId) => {
            dispatch(homeActions.action.beginFollowing(userFollowingId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInSuggestionsToFollow)
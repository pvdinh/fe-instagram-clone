
import {connect} from "react-redux";
import homeActions from "../../redux/actions/homeActions";
import {useEffect, useState} from "react";
import ItemInSuggestionsToFollow from "./ItemInSuggestionsToFollow";

function SuggestionsToFollow(props) {

    useEffect(()=>{
        props.getSuggestionsToFollow()
    },[])

    return(
        <div className="side-menu__suggestions-section">
            <div className="side-menu__suggestions-header">
                <h2>Suggestions for You</h2>
                {/*<button>See All</button>*/}
            </div>
            <div className="side-menu__suggestions-content">
                {
                    props.listUserSuggestionsToFollow.map((item,index)=>(
                        <ItemInSuggestionsToFollow item={item} />
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listUserSuggestionsToFollow: state.home.listUserSuggestionsToFollow,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSuggestionsToFollow:() =>{
            dispatch(homeActions.action.getSuggestionsToFollow())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SuggestionsToFollow)
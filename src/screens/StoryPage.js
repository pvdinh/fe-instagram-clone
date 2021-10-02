import {connect} from "react-redux";
import StoriesComponent from "../components/srories/StoriesComponent";
import StoryAction from "../redux/actions/StoryAction";
import profileAction from "../redux/actions/profileAction";
import StoryComponentFacebook from "../components/srories/StoryComponentFacebook";

function mapStateToProps(state) {
    return {
        listUserHaveStory:state.story.listUserHaveStory,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile:(username,callback,history)=>{
            dispatch(profileAction.action.getUserProfile(username,callback,history))
        },
        getAllStoryFollowing : (callback) =>{
            dispatch(StoryAction.action.getAllStoryFollowing(callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StoryComponentFacebook)
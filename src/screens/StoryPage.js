import {connect} from "react-redux";
import StoriesComponent from "../components/srories/StoriesComponent";
import StoryAction from "../redux/actions/StoryAction";
import profileAction from "../redux/actions/profileAction";

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
        getAllStoryFollowing : () =>{
            dispatch(StoryAction.action.getAllStoryFollowing())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StoriesComponent)
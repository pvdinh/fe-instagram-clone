import {connect} from "react-redux";
import StoriesComponent from "../components/srories/StoriesComponent";
import StoryAction from "../redux/actions/StoryAction";

function mapStateToProps(state) {
    return {
        listUserHaveStory:state.story.listUserHaveStory,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllStoryFollowing : () =>{
            dispatch(StoryAction.action.getAllStoryFollowing())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StoriesComponent)
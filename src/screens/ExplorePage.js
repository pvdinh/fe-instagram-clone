import {connect} from "react-redux";
import ExploreComponent from "../components/explore/ExploreComponent";
import exploreActions from "../redux/actions/exploreActions";

function mapStateToProps(state) {
    return {
        listExplorePosts:state.explore.listExplorePosts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getExplorePosts:(payload) =>{
            dispatch(exploreActions.action.getExplorePosts(payload))
        },
        fetchExplorePosts:(payload) =>{
            dispatch(exploreActions.action.fetchExplorePosts(payload))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExploreComponent)
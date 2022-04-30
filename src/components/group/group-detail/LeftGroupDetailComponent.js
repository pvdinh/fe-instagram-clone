import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PostDetailModal from "../../profile/PostDetailModal";
import postActions from "../../../redux/actions/postActions";
import {Link} from "react-router-dom";

function LeftGroupDetailComponent(props) {
    const [pId,setPId] = useState("");
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)


    const getTop1Like = () =>{
        props.getTop1Like((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Comment = () =>{
        props.getTop1Comment((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Popular = () =>{
        props.getTop1Popular((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Save = () =>{
        props.getTop1Save((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const showModal = () =>{
        if(pId !== ""){
            return(
                <PostDetailModal postId={pId} visible={isVisiblePostDetail} setVisible={()=>{setIsVisiblePostDetail(false)}} />
            )
        }
    }

    const fetchMoreGroup = (e) =>{
        const bottom = e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight;
        if(bottom){
            console.log("bottom")
        }
    }

    return (
        <section className="side-menu-left">

            <Link to={`/g/3453e3eww33`} >
                <div className="label-side-menu-left-group">Group</div>
            </Link>

            <div className="image-side-menu-left-group">
                <img className="image-group" src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" alt="image"/>
            </div>


            <button className="button-create-side-menu-left-group">+ Create a new post in group </button>

            <button className="button-create-side-menu-left-group">+ Add member </button>

            <div id="group-personal" style={{height:"700px", overflowY: "scroll"}} onScroll={(e)=>{fetchMoreGroup(e)}}>
                <div className="side-menu__suggestions-section">
                    <div className="side-menu__suggestions-header">
                        <h2>Administration tools</h2>
                    </div>
                </div>

                <div className="side-menu__user-profile">
                    <Link to={`/g/3453e3eww33/requests`} >
                    <div className="item-menu-left">
                        <a href="#" className="" >
                            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1650987339/instargram-clone/pngwing.com_4_uhvqng.png" alt="Picture"/>
                        </a>
                        <div className="">
                                <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Request membership</a>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="side-menu__user-profile">
                    <Link to={`/g/3453e3eww33/members`} >
                        <div className="item-menu-left" style={{marginLeft:"7px",marginRight:"7px"}}>
                            <a href="#" className="">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                            </a>
                            <div className="">
                                <a href="#" style={{textTransform:"none",marginLeft:"10px"}}>Membership</a>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>

            {
                showModal()
            }
        </section>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getTop1Like: (callback) => {
            dispatch(postActions.action.getTop1Like(callback))
        },
        getTop1Comment: (callback) => {
            dispatch(postActions.action.getTop1Comment(callback))
        },
        getTop1Popular: (callback) => {
            dispatch(postActions.action.getTop1Popular(callback))
        },
        getTop1Save: (callback) => {
            dispatch(postActions.action.getTop1Save(callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftGroupDetailComponent)
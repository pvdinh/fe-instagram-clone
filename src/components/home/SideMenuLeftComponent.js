import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import postActions from "../../redux/actions/postActions";
import PostDetailModal from "../profile/PostDetailModal";

function SideMenuLeftComponent(props) {
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

    return (
        <section className="side-menu-left">

            <div className="side-menu__suggestions-section">
                <div className="side-menu__suggestions-header">
                    <h2>Group personal</h2>
                </div>
            </div>

            <div className="side-menu__user-profile">
                <div className="item-menu-left">
                    <a href="#" className="">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                    </a>
                    <div className="">
                        <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                    </div>
                </div>
            </div>

            <div className="side-menu__suggestions-section">
                <div className="side-menu__suggestions-header">
                    <h2>Tin nổi bật</h2>
                </div>
            </div>

            <div className="side-menu__user-profile">
                <div className="item-menu-left" onClick={()=>{getTop1Like()}}>
                    <p>
                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1650516249/instargram-clone/pngwing.com_hiy5cd.png" alt="Picture"/>
                    </p>
                    <div className="">
                        <p style={{textTransform:"none",marginLeft:"5px"}}>The post with the most likes</p>
                    </div>
                </div>
            </div>

            <div className="side-menu__user-profile">
                <div className="item-menu-left"  onClick={()=>{getTop1Comment()}}>
                    <p>
                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1650516337/instargram-clone/pngwing.com_1_gko1bt.png" alt="Picture"/>
                    </p>
                    <div className="">
                        <p style={{textTransform:"none",marginLeft:"5px"}}>The post with the most comments</p>
                    </div>
                </div>
            </div>

            <div className="side-menu__user-profile">
                <div className="item-menu-left" onClick={()=>{getTop1Popular()}}>
                    <p>
                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1650516844/instargram-clone/pngwing.com_2_j5ierz.png" alt="Picture"/>
                    </p>
                    <div className="">
                        <p href="#" style={{textTransform:"none",marginLeft:"5px"}}>Posts with the most interactions</p>
                    </div>
                </div>
            </div>

            <div className="side-menu__user-profile">
                <div className="item-menu-left"  onClick={()=>{getTop1Save()}}>
                    <p>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="Picture"/>
                    </p>
                    <div className="">
                        <p style={{textTransform:"none",marginLeft:"5px"}}>The post with the most saves</p>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuLeftComponent)
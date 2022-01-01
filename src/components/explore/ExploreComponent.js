import React, {useEffect, useState} from "react";
import {BsFillHeartFill, FaComment} from "react-icons/all";
import InfiniteScroll from "react-infinite-scroll-component";
import PostDetailModal from "../profile/PostDetailModal";

function ExploreComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(12)
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(true)
    const [post,setPost] = useState({})


    useEffect(()=>{
        props.getExplorePosts({page:0,size:size})
    },[])


    useEffect(()=>{
        props.fetchExplorePosts({page:0,size:12+(12*page)})
    },[isVisiblePostDetail])

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setPage(page + 1)
            props.getExplorePosts({page:page+1,size:size})
        }, 1500);
    };

    const reLoad = () =>{
        if(props.reload !== undefined){
            props.reload()
        }
        setIsVisiblePostDetail(!isVisiblePostDetail)
    }

    const onClickPost = (post) =>{
        setPost(post)
        setIsVisiblePostDetail(true)
    }

    const showModalPost = () =>{
        if(Object.keys(post).length > 0){
            return(
                <PostDetailModal postId={post.id} visible={isVisiblePostDetail} setVisible={()=>{reLoad()}} />
            )
        }
    }

    return(
        <div className="wrap-body-page-explore">
            <div className="wrap-center-body-page-explore">
                <div className="body-page-explore">
                    <InfiniteScroll
                        dataLength={props.listExplorePosts.length}
                        next={()=>{fetchMoreData()}}
                        hasMore={true}
                    >
                        <div className="body-page-explore-item-3">
                            {
                                props.listExplorePosts.map((value,index)=>(
                                    <div className="item" onClick={()=>{onClickPost(value.post)}}>
                                        <img src={value.post.imagePath !== "" ? value.post.imagePath : "https://res.cloudinary.com/dinhpv/image/upload/v1640940571/instargram-clone/playicon_qqb2pf.jpg"} />
                                        <div className="wrap-post-info">
                                            <div className="post-info">
                                                <div className="likes">
                                                    <div className="L1L">
                                                        <BsFillHeartFill />
                                                    </div>
                                                    {
                                                        value.post.likes.length
                                                    }
                                                </div>
                                                <div className="comments">
                                                    <div className="C1C">
                                                        <FaComment />
                                                    </div>
                                                    {
                                                        value.numberOfComments
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/*<div className="body-page-explore-item-2">*/}
                        {/*    <div className="item-large">*/}
                        {/*        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1632041022/instargram-clone/flj97yl9cj9ydcmhppak.jpg"/>*/}
                        {/*        <div className="wrap-post-info">*/}
                        {/*            <div className="post-info">*/}
                        {/*                <div className="likes">*/}
                        {/*                    <div className="L1L">*/}
                        {/*                        <BsFillHeartFill />*/}
                        {/*                    </div>*/}
                        {/*                    10*/}
                        {/*                </div>*/}
                        {/*                <div className="comments">*/}
                        {/*                    <div className="C1C">*/}
                        {/*                        <FaComment />*/}
                        {/*                    </div>*/}
                        {/*                    10*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="item-2">*/}
                        {/*        <div className="item-21">*/}
                        {/*            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1632041022/instargram-clone/flj97yl9cj9ydcmhppak.jpg"/>*/}
                        {/*            <div className="wrap-post-info">*/}
                        {/*                <div className="post-info">*/}
                        {/*                    <div className="likes">*/}
                        {/*                        <div className="L1L">*/}
                        {/*                            <BsFillHeartFill />*/}
                        {/*                        </div>*/}
                        {/*                        10*/}
                        {/*                    </div>*/}
                        {/*                    <div className="comments">*/}
                        {/*                        <div className="C1C">*/}
                        {/*                            <FaComment />*/}
                        {/*                        </div>*/}
                        {/*                        10*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="item-21">*/}
                        {/*            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1632041022/instargram-clone/flj97yl9cj9ydcmhppak.jpg"/>*/}
                        {/*            <div className="wrap-post-info">*/}
                        {/*                <div className="post-info">*/}
                        {/*                    <div className="likes">*/}
                        {/*                        <div className="L1L">*/}
                        {/*                            <BsFillHeartFill />*/}
                        {/*                        </div>*/}
                        {/*                        10*/}
                        {/*                    </div>*/}
                        {/*                    <div className="comments">*/}
                        {/*                        <div className="C1C">*/}
                        {/*                            <FaComment />*/}
                        {/*                        </div>*/}
                        {/*                        10*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </InfiniteScroll>
                </div>
            </div>
            {
                showModalPost()
            }
        </div>
    )
}
export default ExploreComponent
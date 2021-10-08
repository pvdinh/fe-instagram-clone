// import {connect} from "react-redux";
// import Slider from "react-slick";
// import React, {useEffect, useRef, useState} from "react";
// import {Avatar} from "antd";
// import {useHistory} from "react-router";
//
// function StoriesItemComponent(props) {
//     let history = useHistory()
//     const sliderRef = useRef()
//     const [currentSlide,setCurrentSlide] = useState(0)
//
//     useEffect(() => {
//         console.log("props", props)
//         if (props.data.userAccountSetting.username === props.usernameUrl) {
//             localStorage.setItem("pos", props.pos)
//         }
//     }, [props.usernameUrl])
//
//     useEffect(() => {
//         if(props.data.postDetails.length > 1){
//             props.data.postDetails.map((value,index)=>{
//                 if(value.post.id === props.pId){
//                     sliderRef.current.slickGoTo(index);
//                 }
//             })
//         }
//     }, [currentSlide])
//
//     const settingsUserItemCurrent = {
//         className: "settingsUserItem",
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         afterChange : (e) =>{
//             setCurrentSlide(e)
//             history.replace(`/stories/${props.usernameUrl}/${props.data.postDetails[e].post.id}`)
//         }
//
//     };
//     const settingsUserItem = {
//         className: "settingsUserItem",
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         draggable:false,
//         arrows: false,
//     };
//
//     const setCurrent = () => {
//         localStorage.setItem("pos", props.pos)
//         history.replace(`/stories/${props.data.userAccountSetting.username}/${props.data.postDetails[0].post.id}`)
//         props.setReload()
//     }
//
//     const calculatorDateStory = (time) => {
//         let distance = Math.round((new Date().getTime() - time) / (1000))
//         switch (true) {
//             case 0 <= distance && distance <= 59:
//                 return distance + "s"
//             case 60 <= distance && distance < 3600:
//                 return Math.round(distance / 60) + "m"
//             case 3600 <= distance && distance < (3600 * 24):
//                 return Math.round(distance / (60 * 60)) + "h"
//             default:
//                 break;
//         }
//     }
//
//     return (
//         <div className="wrap-user-story" onClick={() => {
//             setCurrent()
//         }}>
//             {
//                 localStorage.getItem("pos") === props.pos.toString() ?
//                     <Slider {...settingsUserItemCurrent} ref={sliderRef}>
//                         {
//                             props.data.postDetails.map((value, index) => (
//                                 <div>
//                                     <div className="item-story">
//                                         <div className="user-profile">
//                                             <Avatar src={props.data.userAccountSetting.profilePhoto}/>&nbsp;
//                                             <span
//                                                 className="username">{props.data.userAccountSetting.username}</span>&nbsp;&nbsp;
//                                             <span className="time_add">{calculatorDateStory(value.dateBeginStory)}</span>
//                                         </div>
//                                         <img className="img-story" src={value.post.imagePath}/>
//                                         <div className="footer-story"><input/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </Slider>
//                     :
//                     <>
//                         {
//                             props.data.postDetails.length > 1 ?
//                                 <Slider {...settingsUserItem}>
//                                     {
//                                         props.data.postDetails.map((value, index) => (
//                                             <div>
//                                                 <div className="item-story">
//                                                     <div className="user-profile">
//                                                         <Avatar src={props.data.userAccountSetting.profilePhoto}/>
//                                                         <span
//                                                             className="username">{props.data.userAccountSetting.username}</span>
//                                                         <span className="time_add">{calculatorDateStory(value.dateBeginStory)}</span>
//                                                     </div>
//                                                     <img className="img-story" src={value.post.imagePath}/>
//                                                     <div className="footer-story">
//                                                     </div>
//                                                 </div>
//                                             </div>
//
//                                         ))
//                                     }
//                                 </Slider>
//                                 :
//                                 <div>
//                                     <div className="item-story">
//                                         <div className="user-profile">
//                                             <Avatar src={props.data.userAccountSetting.profilePhoto}/>
//                                             <span
//                                                 className="username">{props.data.userAccountSetting.username}</span>
//                                             <span className="time_add">12h</span>
//                                         </div>
//                                         <img className="img-story" src={props.data.postDetails[0].post.imagePath}/>
//                                         <div className="footer-story">
//                                         </div>
//                                     </div>
//                                 </div>
//                         }
//                     </>
//             }
//         </div>
//     )
// }
//
// function mapStateToProps(state) {
//     return {}
// }
//
// function mapDispatchToProps(dispatch) {
//     return {}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(StoriesItemComponent)
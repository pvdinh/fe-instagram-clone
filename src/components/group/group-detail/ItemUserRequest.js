import React, {useEffect, useState} from "react";
import {connect} from "react-redux";


function ItemUserRequest(props) {
    return (
        <div className="item-requests-user">
            <div className="side-menu__suggestion">
                <a href={"#"} className="side-menu__suggestion-avatar avatar-request-member">
                    <img
                        src="https://res.cloudinary.com/dinhpv/image/upload/v1627739587/instargram-clone/avt_hcfwtt.png"
                        alt="User Picture"/>
                </a>
                <div className="side-menu__suggestion-info">
                    <a href="#">User 1</a>
                    <span>Added by Nal Thanh on 10 August 2021</span>
                </div>
                {
                    props.type === "request"
                        ?
                        <>
                            <button className="btn-confirm-request mr-10" onClick={() => {
                            }}>Confirm
                            </button>

                            <button className="btn-cancel-request following" onClick={() => {
                            }}>Cancel
                            </button>
                        </>
                        :
                        <>
                            <button className="btn-confirm-request mr-10" onClick={() => {
                            }}>Message
                            </button>

                            <button className="btn-cancel-request following" onClick={() => {
                            }}>Remove
                            </button>
                        </>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemUserRequest)
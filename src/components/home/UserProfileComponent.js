import React from "react";

function UserProfileComponent() {
    return(
        <div className="user-profile">
            <div className="avatar">
                <img
                    src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                    alt="User"
                />
            </div>
            <div className="desc">
                <a href="https://github.com/leocosta1" target="_blank">
                    username
                </a>
                <span>display name</span>
            </div>
        </div>
    )
}
export default UserProfileComponent
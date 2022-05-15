import React from "react";

function NotHavePostInGroupChild() {
    return(
        <div style={{height:"100vh"}}>
            <div className="display-not-have-post">
                <div className="wrap-image-image">
                    <img className="image" src="https://www.facebook.com/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg" alt="image" />
                </div>
                <div className="content-display-not-have-post">This group has no posts</div>
            </div>
        </div>
    )
}
export default NotHavePostInGroupChild;
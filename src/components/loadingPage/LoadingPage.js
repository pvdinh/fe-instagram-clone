import React from "react";
import {Spin} from "antd";

function LoadingPage() {
    return (
        <div className="wrap-loading-page">
            <div className="example">
                <Spin/>
            </div>
        </div>
    )
}

export default LoadingPage
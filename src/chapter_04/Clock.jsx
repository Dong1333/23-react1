// 시계 만들기 
// Clock 컴포넌트

import React from "react";

function Clock() {
    return(
        <div>
            <h1>안녕 리액트!</h1>
            <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;
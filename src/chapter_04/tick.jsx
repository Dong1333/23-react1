import React from "react"


// 컴포넌트를 작성하는 곳(파일 명과 일치하게 입력).
function tick(){
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}


// 외부에서 사용할 수 있게 설정하는 코드
setInterval(tick, 1000);
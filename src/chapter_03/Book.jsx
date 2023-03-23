import React from "react"


// 컴포넌트를 작성하는 곳(파일 명과 일치하게 입력).
function Book(props){
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.name}페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}


// 외부에서 사용할 수 있게 설정하는 코드
export default Book
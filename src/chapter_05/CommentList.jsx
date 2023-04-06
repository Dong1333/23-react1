import React from "react";
import Comment from "./Comment"

function CommentList(props) {
    return(
        <div>
            <Comment name={"신동욱"} comment={"안녕하세요. 신동욱입니다."} />
            <Comment name={"신동욱1"} comment={"안녕하세요. 신동욱1입니다."} />
            <Comment name={"신동욱2"} comment={"안녕하세요. 신동욱2입니다."} />
        </div>
    )
}

// const comments = [
//     {
//         name: "이인제",
//         comment: "안녕하세요, 소플입니다.",
//     },
//     {
//         name: "유재석",
//         comment: "리액트 재미있어요~!",
//     },
//     {
//         name: "강민경",
//         comment: "저도 리액트 배워보고 싶어요!!",
//     },
// ];

// function CommentList(props) {
//     return (
//         <div>
//             {comments.map((comment) => {
//                 return (
//                     <Comment name={comment.name} comment={comment.comment} />
//                 );
//             })}
//         </div>
//     );
// }


export default CommentList


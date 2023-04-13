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


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}


export default CommentList


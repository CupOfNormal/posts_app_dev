import React from 'react';

import { Comment } from '../';

import './CommentList.css';

const CommentList = ({comments}) => {
    const commentList = comments.map(
        (comment, index) => (
            <Comment
                key={index}
                name={comment.email.split('@')[0]}
                mail={comment.email}
                body={comment.body}
                last={comments.length === index+1}
            />
        )
    )
    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
}

export default CommentList;
import React from 'react';

import './Comment.css';

const Comment = ({name, mail, body, last}) => {
    return (
        <li className="Comment">
            <p>
                <b>{name}</b>
                <br/>
                {mail}
                <br/>
                {body}
            </p>
            {!last && <hr/>}
        </li>
    );
};

export default Comment;
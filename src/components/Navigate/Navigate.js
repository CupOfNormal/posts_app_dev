import React from 'react';

import { Button } from 'semantic-ui-react';
import './Navigate.css';

const Navigate = ({postId, disabled, onClick}) => (
    <div className="Navigate">
        <Button color="teal"
                content="Prev"
                icon="left arrow"
                labelPosition="left"
                disabled={disabled}
                onClick={() => onClick('PREV')}
        />
        <div className="Navigate-page-num">
            <b>{postId}</b>
        </div>
        <Button color="teal"
                content="Next"
                icon="right arrow"
                labelPosition="right"
                disabled={disabled}
                onClick={() => onClick('NEXT')}
                className="Navigate-right-button"
        />
    </div>
);

export default Navigate;
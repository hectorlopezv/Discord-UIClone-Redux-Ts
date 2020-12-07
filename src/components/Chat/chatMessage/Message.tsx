import React from 'react'
import './Message.css';
import { Avatar } from '@material-ui/core';

export interface MessageProps {
    timestamp: any;
    message: string;
    user: any;
}

const Message: React.FC<MessageProps> = (props) => {
    const {photo, displayName} = props.user;
    const{ message, timestamp } = props;

    const date_ = new Date(parseInt(timestamp)).toDateString();

    return (
        <div className="message">
            <Avatar src={photo} />
            <div className="message_info">
                <h4>
                    {displayName}
                    <span className="message_timestamp">
                        {date_}
                    </span>
                </h4>
                <p>{message}</p>
            </div>

        </div>
    );
}

export default React.memo(Message);
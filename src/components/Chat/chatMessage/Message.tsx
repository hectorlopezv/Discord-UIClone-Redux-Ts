import React from 'react'
import './Message.css';
import { Avatar } from '@material-ui/core';

export interface MessageProps {
    timestamp: any;
    message: string;
    user: any;
}

const Message: React.FC<MessageProps> = (props) => {
    //const date_ = new Date(props.timestamp?.toDate()).toUTCString();

    return (
        <div className="message">
            <Avatar src={props.user.photo} />
            <div className="message_info">
                <h4>
                    {props.user.displayName}
                    <span className="message_timestamp">
                        {"hello"/*date_*/}
                    </span>
                </h4>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default React.memo(Message, (prev:any, next:any)=>{
    console.log('esto es message', prev, next);
    return true;
});
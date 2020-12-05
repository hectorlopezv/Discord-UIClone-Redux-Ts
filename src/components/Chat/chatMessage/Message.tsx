import React from 'react'
import './Message.css';
import {Avatar} from '@material-ui/core';
import Photo from '../../../assets/pictures/índice.png';

export interface MessageProps {
    timestamp: any;
    message: string;
    user: any;
}
 
const Message: React.FC<MessageProps> = (props) => {
    console.log(props.timestamp, props.message, props.user);
    const date_ = new Date(props.timestamp?.toDate()).toUTCString();
    console.log(date_);

    return ( 
        <div className="message">
            <Avatar src={props.user.photo}/>
            <div className="message_info">
                <h4>
                    {props.user.displayName}
                    <span className="message_timestamp">
                        {date_}
                    </span>
                </h4>
                <p>{props.message}</p>
            </div>

        </div>
     );
}
 
export default Message;
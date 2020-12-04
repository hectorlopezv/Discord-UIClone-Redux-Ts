import React from 'react'
import './Message.css';
import {Avatar} from '@material-ui/core';
import Photo from '../../../assets/pictures/índice.png';

export interface MessageProps {
    
}
 
const Message: React.FC<MessageProps> = () => {
    return ( 
        <div className="message">
            <Avatar src={Photo}/>
            <div className="message_info">
                <h4>Hector Lopez
                    <span className="message_timestamp">
                        this is a timestamp
                    </span>
                </h4>
                <p>This is a message</p>
            </div>

        </div>
     );
}
 
export default Message;
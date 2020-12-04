import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import './ChatHeader.css';
export interface ChatHeaderProps {
    
}
 
const ChatHeader: React.FC<ChatHeaderProps> = () => {
    return (  
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3><span className="chatHeader_hash">#</span>Youtube</h3>
            </div>

            <div className="chatHeader_right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />
                <div className="chatHeader_search">
                    <input placeholder="search" type="text" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    );
}
 
export default ChatHeader;
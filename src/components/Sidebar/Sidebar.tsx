import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export interface SideBarProps {
    
}

const SideBar: React.FC<SideBarProps> = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" 
                        onClick={()=>{}}/>
                </div>

                <div className="sidebar_channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar_voice">
                <SignalCellularAltIcon 
                fontSize="large" 
                className="sidebar_voiceIcon"/>
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar_voiceIcons">
                    <CallIcon/>
                    <InfoOutlinedIcon/>
                </div>
            </div>





        </div>
     );
}
 
export default SideBar;
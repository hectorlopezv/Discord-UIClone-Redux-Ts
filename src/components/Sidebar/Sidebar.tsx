import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {Avatar} from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import HectorImage from '../../assets/pictures/índice.png';

export interface SideBarProps {
    
}

const SideBar: React.FC<SideBarProps> = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Hector Ui Clone</h3>
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

            <div className="sidebar_profile">
                <Avatar src={HectorImage}/>
                <div className="sidebar_profileInfo">
                    <h3>@Hector Lopez</h3>
                    <p>#thisIsMyId</p>
                </div>

                <div className="sidebar_profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>

            </div>



        </div>
     );
}
 
export default SideBar;
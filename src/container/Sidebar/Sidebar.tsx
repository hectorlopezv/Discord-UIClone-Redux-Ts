import React, { useState, useEffect, useCallback } from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../../components/Sidebar/SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector, useDispatch } from 'react-redux';
import db, { auth } from '../../firebase';
import {fetchChannelsList, newChannelPost} from '../../store/actions/User';
import Pusher from 'pusher-js';


export interface SideBarProps {

}
const pusher = new Pusher('4dcdbf5c9a4316d3eab6', {
    cluster: 'us2'
  });


const SideBar: React.FC<SideBarProps> = () => {
    const [channels, setchannels] = useState<any[]>([]);
    const dispatch = useDispatch();

    //disptach action
    const getChannelList = useCallback((setchannels: any) => dispatch(fetchChannelsList(setchannels)), [dispatch]);
    const newChannel = (newChannel: string) => dispatch(newChannelPost(newChannel));
    const user = useSelector((currentState: any) => currentState.user.user);
    
    
    const addChannelHandler = (event: any) => {
        const channelName = prompt('Enter new Channel Bro');
        if (channelName) {
            newChannel(channelName)
        }
    }

    useEffect(() => {
        getChannelList(setchannels);
        const channel = pusher.subscribe('channels');
        channel.bind('newChannel', function(data: any) {
            getChannelList(setchannels);
        });
        

    }, [getChannelList]);

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
                    <AddIcon onClick={addChannelHandler} className="sidebar_addChannel" />
                </div>

                <div className="sidebar_channelsList">
                    
                    {channels.map(({ id, name }) => (
                        <SidebarChannel key={id} id={id} channelName={name}
                        />))}
                </div>
            </div>

            <div className="sidebar_voice">
                <SignalCellularAltIcon
                    fontSize="large"
                    className="sidebar_voiceIcon" />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar_voiceIcons">
                    <CallIcon />
                    <InfoOutlinedIcon />
                </div>
            </div>

            <div className="sidebar_profile">
                <Avatar onClick={() => auth.signOut()} src={user ? user.photo : null} />
                <div className="sidebar_profileInfo">
                    <h3>{user ? user.displayName : null}</h3>
                    <p>#{user ? user.uid.substring(0, 5) : null}</p>
                </div>

                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>

            </div>



        </div>
    );
}

export default SideBar;
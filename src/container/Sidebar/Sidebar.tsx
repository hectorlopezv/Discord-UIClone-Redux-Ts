import React, { useState, useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import db, { auth } from '../../firebase';

export interface SideBarProps {

}

const SideBar: React.FC<SideBarProps> = () => {
    const [channels, setchannels] = useState<any[]>([]);

    const user = useSelector((currentState: any) => currentState.user.user);
    const addChannelHandler = (event: any) => {
        const channelName = prompt('Enter new Channel Bro');
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    }

    useEffect(() => {//import channels from the db
        //execute when something in the database changes(listener)
        db.collection('channels').onSnapshot(snapshot => {
            const new_ = snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            }));
            setchannels(new_);
        });
    }, []);

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
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel}

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
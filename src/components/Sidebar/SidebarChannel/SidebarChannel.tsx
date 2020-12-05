import React from 'react'
import './SidebarChannel.css';
import {useDispatch} from 'react-redux';

export interface SidebarChannelProps {
    id:string
    channelName: {channelName: string};
}
 
const SidebarChannel: React.FC<SidebarChannelProps> = (props) => {
    //const { id, channel} = props;
    const dispatch = useDispatch();
    setChannelId
    return ( 
       
        <div onClick={} className="sidebarChannel">
            <h4><span className="sidebarChannel_hash">#</span>{ props.channelName.channelName}</h4>
        </div>
     );
}
 
export default SidebarChannel;
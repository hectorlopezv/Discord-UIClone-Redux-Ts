import React from 'react'
import './SidebarChannel.css';

export interface SidebarChannelProps {
    
}
 
const SidebarChannel: React.FC<SidebarChannelProps> = (props) => {
    //const { id, channel} = props;
    return ( 
        <div className="sidebarChannel">
            <h4><span className="sidebarChannel_hash">#</span>Youtube</h4>
        </div>
     );
}
 
export default SidebarChannel;
import React from 'react'
import './SidebarChannel.css';
import {useDispatch} from 'react-redux';
import { setChannel} from '../../../store/actions/App';

export interface SidebarChannelProps {
    id:string
    channelName: {channelName: string};
}
 
const SidebarChannel: React.FC<SidebarChannelProps> = (props) => {
    //const { id, channel} = props;
    const dispatch = useDispatch();
    const set_Channel = (id:string, name: string)=> dispatch(setChannel(id, name));
    return (
        <div onClick={() => set_Channel( props.id, props.channelName.channelName)} className="sidebarChannel">
            <h4><span className="sidebarChannel_hash">#</span>{ props.channelName.channelName}</h4>
        </div>
     );
}
 
export default SidebarChannel;
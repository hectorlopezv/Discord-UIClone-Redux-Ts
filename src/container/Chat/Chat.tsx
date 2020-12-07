import React, {useState, useEffect, useCallback} from 'react'
import './Chat.css';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../../components/Chat/chatMessage/Message';
import { useSelector, useDispatch} from 'react-redux';
import Pusher from 'pusher-js';
import {fetchConverstation, newMessagePost} from '../../store/actions/User';

export interface ChatProps {
    
}
const pusher = new Pusher('4dcdbf5c9a4316d3eab6', {
    cluster: 'us2'
  });
let channelPrev = '';
const Chat: React.FC<ChatProps> = () => {
    const dispatch = useDispatch();
    const user = useSelector((currentState:any ) =>  currentState.user.user);
    const channelName = useSelector((currentState:any ) =>  currentState.app.channelName);
    const channelId = useSelector((currentState:any ) =>  currentState.app.channelId);
    const [input, setInput] = useState('');
    const [messages, setmessages] = useState([]);
    const getMessage = useCallback((id:string, setMessage: any) => dispatch(fetchConverstation(id, setMessage)), [dispatch]);
    const newMessage = useCallback((message: string, user: any, id: string) => dispatch(newMessagePost(message, user, id)), [dispatch]);

    useEffect(() => {//get messages ans subribe to pusher
        console.log(channelId);

        if(channelId !== channelPrev && channelName.length > 0){
            getMessage(channelId, setmessages);
        }

        const channel = pusher.subscribe('conversation');
        channel.bind('newMessage', function(data: any) {
            //esto me dice que cambio los channels     
                if( channelName === channelPrev && channelName.length > 0){
                    getMessage(channelId, setmessages);
                }
                
        });
        channelPrev = channelName





    }, [channelId, channelName, getMessage]);

    const inputHandler = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const sendMessage = (event: any) => {//we send message
        //to the collection with use!
        event.preventDefault();

        if(input.length > 0){
            newMessage(input, {...user}, channelId);
            setInput('');
        }
    }

    return (  
        <div className="chat">
            <ChatHeader
                channelName={channelName}
            />
            <div className="chat_messages">
                {messages.map((message: any) => {
            
                    return <Message 
                    key={Math.random().toString()}
                        timestamp={message.timestamp}
                        message= {message.message}
                        user={message.user}
                    />
                })}
            </div>

            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form >
                    <input onChange={inputHandler} 
                    disabled={channelName? false: true} 
                    value={input} 
                    placeholder={`Message #${channelName}`}/>
                    <button
                        onClick={sendMessage} 
                        className="chat_inputButton" 
                        type="submit">
                            Send Message
                    </button>
                </form>

                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>

            </div>

        </div>      
);
}
 
export default Chat;
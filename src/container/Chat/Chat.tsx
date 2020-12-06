import React, {useState, useEffect} from 'react'
import './Chat.css';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../../components/Chat/chatMessage/Message';
import { useSelector} from 'react-redux';
import db from '../../firebase';
import firebase from 'firebase';
export interface ChatProps {
    
}
 
const Chat: React.FC<ChatProps> = () => {
    const user = useSelector((currentState:any ) =>  currentState.user.user);
    const channelName = useSelector((currentState:any ) =>  currentState.app.channelName);
    const channelId = useSelector((currentState:any ) =>  currentState.app.channelId);
    const [input, setInput] = useState('');
    const [messages, setmessages] = useState([]);

    const inputHandler = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    useEffect(() => {//get mesasges from firebase
        if(channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot: any) => {
                //get messages from firebase(DB)
                setmessages(snapshot.docs.map((doc:any) => {
                    
                    const data = doc.data();

                    return data;
                }));
            });
        }

    }, [channelId])

    const sendMessage = (event: any) => {//we send message
        //to the collection with use!
        event.preventDefault();

        if(input.length > 0){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input, 
                user: user
            });
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
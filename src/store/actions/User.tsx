import * as actionTypes from '../actions/actionTypes';

export const onLogin = (uid: string,
    photoURL: string, email: string,
    displayName: string) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            uid: uid,
            photo: photoURL,
            email: email,
            displayName: displayName
        }
    }
}

export const onLogout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}

export const fetchChannelsList = (setchannel: any) => {
  
    return {
        type: actionTypes.FETCH_CHANNELS_LIST,
        payload: { 
            setChannel : setchannel
        }
    }
}

export const fetchConverstation = (id: string, setmessages:any ) => {
   
    return {
        type: actionTypes.FETCH_CHANNEL,
        payload: {
            id: id,
            setMessages: setmessages
        }
    }
}

export const newMessagePost = (message: string, user: any, id: string)=>{
    return {
        type: actionTypes.NEW_MESSAGE,
        payload: {
            message: message,
            user: user,
            id: id
        }
    }
}

export const newChannelPost = (channelName: string)=>{
    return {
        type: actionTypes.NEW_CHANNEL,
        payload: {
            channelName: channelName
        }
    }
}
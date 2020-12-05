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



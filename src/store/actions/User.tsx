import * as actionTypes from '../actions/actionTypes';

export const onLogin = () => {
    return {
        type: actionTypes.LOGIN,
    }
}

export const onLogout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}



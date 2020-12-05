import * as actionTypes from '../actions/actionTypes';


export const setChannel = (id: string, name: string) => {
    return {
        type: actionTypes.SET_CHANNEL,
        payload: {
            channelId: id,
            channelName: name
        }
    }
}

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    channelId: null,
    channelName: null
}

const AppReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.SET_CHANNEL){
         return {
            channelId: action.payload.
            channelName: action.payload.
         }
     }


    return  {}

}

export default AppReducer;


import * as actionTypes from '../actions/actionTypes';

const initialState = {
    channelId: null,
    channelName: null
}

const AppReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.CHANNELID){
         return {}
     }


    return  {}

}

export default AppReducer;

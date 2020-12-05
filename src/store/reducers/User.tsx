
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null
}

const UserReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.LOGIN){
         return {}
     }

     if(action.type === actionTypes.LOGOUT){
        return {}
    }
    return {}

}

export default UserReducer;

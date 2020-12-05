
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {
        uid: null,
        photo: null,
        email: null,
        displayName: null
    }
}

const UserReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.LOGIN){
         return {
             user: {...state.user,
                uid: action.payload.uid,
                photo: action.payload.photo,
                email: action.payload.email,
                displayName: action.payload.displayName
            } 
         };
     }
     
     if(action.type === actionTypes.LOGOUT){
        return {user: null};
    }
    return {user: null};

}

export default UserReducer;

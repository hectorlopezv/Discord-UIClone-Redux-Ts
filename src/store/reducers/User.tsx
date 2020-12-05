
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {
        uid: '',
        photo: '',
        email: '',
        displayName: ''
    }
}

const UserReducer = (state = initialState, action: any) => {
     if(action.type === actionTypes.LOGIN){
         return {
             ...state,
             user: {...state.user,
                uid: action.payload.uid,
                photo: action.payload.photo,
                email: action.payload.email,
                displayName: action.payload.displayName
            } 
         };
     }

     if(action.type === actionTypes.LOGOUT){
        return {...state, user: null};
    }
    return state;

}

export default UserReducer;

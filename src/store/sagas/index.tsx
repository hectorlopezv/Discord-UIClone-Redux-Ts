import * as actionTypes from '../actions/actionTypes';
import {takeEvery, all} from 'redux-saga/effects';
import {getChannel, getChannelList, newMessage, newChannel} from './discord';


export function* watchDiscord() {
    
    yield all([
        takeEvery(actionTypes.FETCH_CHANNEL, getChannel),
        takeEvery(actionTypes.FETCH_CHANNELS_LIST, getChannelList),
        takeEvery(actionTypes.NEW_MESSAGE, newMessage),
        takeEvery(actionTypes.NEW_CHANNEL, newChannel)
        // takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        // takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        // takeEvery(actionTypes.AUTH_USER, authSaga),
        // takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState),
        // takeEvery(actionTypes.INIT_INGRIDIENT, initIngridients),
        // takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga),
        // takeEvery(actionTypes.FETCH_ORDER_INIT, fetchOrdersSaga),
    ]);

}
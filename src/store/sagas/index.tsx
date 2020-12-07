import * as actionTypes from '../actions/actionTypes';
import {takeEvery, all} from 'redux-saga/effects';
import {getChannel, getChannelList, newMessage, newChannel} from './discord';

export function* watchDiscord() {
    yield all([
        takeEvery(actionTypes.FETCH_CHANNEL, getChannel),
        takeEvery(actionTypes.FETCH_CHANNELS_LIST, getChannelList),
        takeEvery(actionTypes.NEW_MESSAGE, newMessage),
        takeEvery(actionTypes.NEW_CHANNEL, newChannel)
    ]);

}
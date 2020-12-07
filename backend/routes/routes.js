import express from 'express';


//import controllers
import {
    getData, 
    newChannel, 
    newMessage, 
    getChannelList, 
    getConversation
} 
from '../controller/channelsController.js';
const router = express.Router();


export function router_() {

    router.get('/get/data', getData);

    router.post('/new/channel', newChannel);

    router.post('/new/message', newMessage);


    router.get('/get/channelList', getChannelList);

    router.get('/get/conversation', getConversation);

    return router;
}
import instance_discord from '../../axios';

//update actual channel in store
export function* getChannel(action: any) {

    //do Asyn operations.
    //yield 
    //call new action ---> calls reducer--> update Store
    try{
        const response = yield instance_discord.get(`/get/conversation?id=${action.payload.id}`);
        //call another action
        console.log(response);
        yield action.payload.setMessages([...response.data[0].conversation]);
    }
    catch(error){

    }  
}


export function* getChannelList(action: any) {
    console.log('entro al saga function')
    //do Asyn operations.
    //yield 
    //call new action ---> calls reducer--> update Store
    try{
        const response = yield instance_discord.get("/get/channelList");
        //call another action
        yield action.payload.setChannel(response.data);//update channeList
        
    }
    catch(error){

    }  
}


export function* newMessage(action: any){
    //post new message
    try{
        yield instance_discord.post(`/new/message?id=${action.payload.id}`, { 
            message: action.payload.message,
            timestamp: Date.now(),
            user: action.payload.user
        });
    }
    catch(error){

    }  
}


export function* newChannel(action: any){
    //post new message
    try{
        yield instance_discord.post('/new/channel', { 
            channelName: action.payload.channelName
        });
    }
    catch(error){

    }  
}




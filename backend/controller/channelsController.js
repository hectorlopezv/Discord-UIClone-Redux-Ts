import mongoData from '../DBschema.js';

export function getData (req, res) {
    mongoData.find((err, data) => {
      if(err){
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
  
    });
}

export function newChannel (req, res)  {
    const dbData = req.body;
    mongoData.create(dbData, (err, data) => {
      if(err){
        res.status(500).send(err);
      }else{
        res.status(200).send(data); 
      }
    });
  
}

export function newMessage (req, res)  {
    mongoData.update(    
        { _id: req.query.id}, //get id from queryParams
        { $push: {conversation: req.body } },//operation
        (err, data) => {
          if(err){
            console.log('id not found')
            res.status(404).send(err);
          }else{
            res.status(201).send(data); 
          }
        }
    );
}


export function getChannelList  (req, res)  {
    mongoData.find( (err, data) => {
      if(err){
        res.status(500).send(err);
      }else{
        let channels = [];
        data.map((channelData) => {
          const channelInfo = {
            id: channelData._id,
            name: channelData.channelName
          }
          channels.push(channelInfo);
        });
  
        res.status(200).send(channels); 
      }
    });
}

export function getConversation  (req, res) {
    const id = req.query.id;
  
    mongoData.find({_id: id}, (err, data) => {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data)
      }  
    });
}


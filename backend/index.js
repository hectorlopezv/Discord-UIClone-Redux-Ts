import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import mongoData from './DBschema.js';
// rest of the code remains same
const app = express();
const PORT = 8000;


//midleware
app.use(express.json());
app.use(cors());

//db config

const mongoURI = 'mongodb+srv://admin:t0kkzW4BXtDESQSh@cluster0.dgymu.mongodb.net/DBdiscord?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//api routes
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/new/channel', (req, res) => {
  const dbData = req.body;
  mongoData.create(dbData, (err, data) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(data); 
    }
  });

});

app.post('/new/message', (req, res) => {
  mongoData.update(    
      { _id: req.query.id}, //get id from queryParams
      { $push: {conversation: req.body } },
      (err, data) => {
        if(err){
          console.log('id not found')
          res.status(404).send(err);
        }else{
          res.status(201).send(data); 
        }
      }
  );
});

app.get('/get/channelList', (req, res) => {
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
});


//listen
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});



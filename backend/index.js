import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {router_} from './routes/routes.js';
import Pusher from 'pusher';


const pusher = new Pusher({
  appId: "1119274",
  key: "4dcdbf5c9a4316d3eab6",
  secret: "1715daafc9e46e898132",
  cluster: "us2",
  useTLS: true
});


// rest of the code remains same
const app = express();
const PORT = 8000;

//midleware
app.use(express.json());
app.use(cors());

//api routes
app.use('/', router_());

//db config
const mongoURI = 'mongodb+srv://admin:t0kkzW4BXtDESQSh@cluster0.dgymu.mongodb.net/DBdiscord?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('db connected');

  //change Stream for RealTime in mongoDb
  //watch collection for Changes adn alert us (READ, WRITE operations)
  const changeStream = mongoose.connection.collection('conversations').watch();

  //function to execute on certain evenets
  //on<"change" | "close" | "end" | "error" | "resumeTokenChanged">(event: "change" | "close" | "end" | "error" | "resumeTokenChanged"
  changeStream.on('change', (change) => {

    if(change.operationType === 'insert'){
        pusher.trigger("channels", "newChannel", {
          'change': change
        });      
    }
    else if(change.operationType === 'update'){
        pusher.trigger("conversation", "newMessage", {
          'change': change
        });
    } else {
      console.log('Errpr Pusher')
    }});
  
});

//listen
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});



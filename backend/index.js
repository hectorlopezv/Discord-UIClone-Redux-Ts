import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {router_} from './routes/routes.js';

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

//listen
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});



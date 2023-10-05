import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://legend:yadav152530@mongo-practice-js.cfemuts.mongodb.net/');
// const db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));

const dbString='mongodb+srv://legend:yadav152530@mongo-practice-js.cfemuts.mongodb.net/'

mongoose.connect(dbString);

import app from './app.js'

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
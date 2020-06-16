const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
const mongoose = require('mongoose');
const URI = 'mongodb+srv://vanthaodhdt:ta210402@cluster0-nolvx.mongodb.net/YourLap?retryWrites=true&w=majority';
const userRoute = require('./apis/user.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const connectDB = async () => {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('db connected..!');
}
connectDB()

userRoute.load(app);
// mongoose.connect(, { useUnifiedTopology: true, useNewUrlParser: true });       
app.listen(port, () => console.log('Server listen on port ' + port));
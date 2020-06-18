//destructuring  pha vo
const mongoose = require('mongoose');
const URI = 'mongodb+srv://vanthaodhdt:ta210402@cluster0-nolvx.mongodb.net/YourLap?retryWrites=true&w=majority';
module.exports = {
    mongoose,
    connectDB: () => {
        return mongoose.connect(URI, { 
            useNewUrlParser: true, 
            useFindAndModify: false,
            useUnifiedTopology: true, 
            useCreateIndex: true 
        });
    }
}
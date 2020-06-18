const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
const mongoose = require('mongoose');
const NSXRoute = require('./apis/NSX');
const PTRoute = require('./apis/productType');
const ProductRoute = require('./apis/product');
const userRoute = require('./apis/user.js');
const bodyParser = require('body-parser');
const models = require('./models')
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

models
.connectDB()
.then(console.log('connect db successfully'))
.catch(function (e) {
    console.error(e);
    process.exit(1);
});
const headers = {
    // 'allowedHeaders': ['Content-Type', 'Authorization'],
    'origin': '*',
    // 'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // 'preflightContinue': true
};
app.use(cors(headers));
app.options('*', cors(headers));

userRoute.load(app);
NSXRoute.load(app);
ProductRoute.load(app);
PTRoute.load(app);
// mongoose.connect(, { useUnifiedTopology: true, useNewUrlParser: true });       
app.listen(port, () => console.log('Server listen on port ' + port));
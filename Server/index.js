const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
const helmet = require('helmet');
const bodyParser = require('body-parser');

const NSXRoute = require('./apis/NSX');
const PTRoute = require('./apis/productType');
const ProductRoute = require('./apis/product');
const userRoute = require('./apis/user.js');
const CartRoute = require('./apis/cart');

const Order = require('./apis/order');
const OrderDetail = require('./apis/orderDetail');
const Promotion = require('./apis/promotion');
const PromotionType = require('./apis/promotionType')
const models = require('./models');

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
app.use(helmet());
userRoute.load(app);
NSXRoute.load(app);
ProductRoute.load(app);
PTRoute.load(app);
CartRoute.load(app);
Order.load(app);
OrderDetail.load(app);
Promotion.load(app);
PromotionType.load(app);

app.use(function (err, req, res, next) {
    // console.log(JSON.stringify(err, null, 2));
    if (Array.isArray(err.errors)) {
        const messagese = err.errors.map(function(item) {
            return item.message;
        });
        return res.status(400).json({
            error : messagese
        });
    }
    return res.json({
        message: err.message || 'have error'
    });
});

// mongoose.connect(, { useUnifiedTopology: true, useNewUrlParser: true });       
app.listen(port, () => console.log('Server listen on port ' + port));
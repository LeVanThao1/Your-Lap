
const controllerOT = require('../controllers/orderDetail.js');

exports.load = (app) => {
    app.post('/api/v1/ordertype', controllerOT.createOrderDetail);
    app.delete('/api/v1/ordertype/:id', controllerOT.deleteOrderDetail);
    app.get('/api/v1/ordertype/:id',  controllerOT.getOrderDetail);
    app.get( '/api/v1/ordertype',  controllerOT.getAllOrderDetail);
    app.put('/api/v1/ordertype/:id',  controllerOT.updateOrderDetail);
}
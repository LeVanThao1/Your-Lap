
const controllerCart = require('../controllers/cart');

exports.load = (app) => {
    // app.post('/api/v1/nsx', controllerNSX.createNSX);
    app.delete('/api/v1/cart/:id', controllerCart.deleteCart);
    app.get('/api/v1/cart/:id',  controllerCart.getCart);
    app.put('/api/v1/cart/addsp',  controllerCart.addSP);
    app.put('/api/v1/cart/deletesp',  controllerCart.deleteSP);
    app.put('/api/v1/cart/change',  controllerCart.changeAmount);
}
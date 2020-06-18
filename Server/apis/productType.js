
const controllerPT = require('../controllers/productType.js');

exports.load = (app) => {
    app.post('/api/v1/type_product', controllerPT.createPT);
    app.delete('/api/v1/type_product/:id', controllerPT.deletePT);
    app.get('/api/v1/type_product/:id',  controllerPT.getPT);
    app.get( '/api/v1/type_product',  controllerPT.getAllPT);
    app.put('/api/v1/type_product/:id',  controllerPT.updatePT);
}
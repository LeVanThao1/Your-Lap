
const controllerProduct = require('../controllers/product.js');
const upload = require('../helper/multer')
const { checkAuthentication } = require('../middleware/authentication')


exports.load = (app) => {
    app.post('/api/v1/products',[checkAuthentication, upload.array('images', 10)] ,controllerProduct.createProduct);
    app.delete('/api/v1/products/:id', controllerProduct.deleteProduct);
    app.get('/api/v1/products/:id',  controllerProduct.getProduct);
    app.get( '/api/v1/products',  controllerProduct.getAllProducts);
    app.put('/api/v1/products/:id',  controllerProduct.updateProduct);
}
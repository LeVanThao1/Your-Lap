
const controllerProduct = require('../controllers/product.js');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

exports.load = (app) => {
    app.post('/api/v1/products', upload.single('images'),controllerProduct.createProduct);
    app.delete('/api/v1/products/:id', controllerProduct.deleteProduct);
    app.get('/api/v1/products/:id',  controllerProduct.getProduct);
    app.get( '/api/v1/products',  controllerProduct.getAllProducts);
    app.put('/api/v1/products/:id',  controllerProduct.updateProduct);
}

const controllerPromotion = require('../controllers/promotion.js');

exports.load = (app) => {
    app.post('/api/v1/promotion', controllerPromotion.createPromotion);
    app.delete('/api/v1/promotion/:id', controllerPromotion.deletePromotion);
    app.get('/api/v1/promotion/:id',  controllerPromotion.getPromotion);
    app.get( '/api/v1/promotion',  controllerPromotion.getAllPromotion);
    app.put('/api/v1/promotion/:id',  controllerPromotion.updatePromotion);
}

const controllerPromotionType = require('../controllers/promotion.js');

exports.load = (app) => {
    app.post('/api/v1/promotiontype', controllerPromotionType.createPromotion);
    app.delete('/api/v1/promotiontype/:id', controllerPromotionType.deletePromotion);
    app.get('/api/v1/promotiontype/:id',  controllerPromotionType.getPromotion);
    app.get( '/api/v1/promotiontype',  controllerPromotionType.getAllPromotion);
    app.put('/api/v1/promotiontype/:id',  controllerPromotionType.updatePromotion);
}
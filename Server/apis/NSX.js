
const controllerNSX = require('../controllers/NSX.js');

exports.load = (app) => {
    app.post('/api/v1/nsx', controllerNSX.createNSX);
    app.delete('/api/v1/nsx/:id', controllerNSX.deleteNSX);
    app.get('/api/v1/nsx/:id',  controllerNSX.getNSX);
    app.get( '/api/v1/nsx',  controllerNSX.getAllNSX);
    app.put('/api/v1/nsx/:id',  controllerNSX.updateNSX);
}
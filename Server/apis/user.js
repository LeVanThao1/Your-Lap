
const controllerUser = require('../controllers/users.js');

exports.load = (app) => {
    app.post('/api/v1/users', controllerUser.createUser);
    app.post('/api/v1/login', controllerUser.login);
    app.delete('/api/v1/users/:id', controllerUser.deleteUser);
    app.get('/api/v1/users/:id',  controllerUser.getUser);
    app.get( '/api/v1/users',  controllerUser.getAllUser);
    app.put('/api/v1/users/:id',  controllerUser.updateUser);
    // app.get('/api/v1/users/token',  controllerUser.updateUser);
}
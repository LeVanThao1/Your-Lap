
const controllerUser = require('../controllers/users.js');
const userValidation = require('../validations/user');
const { validate }= require('express-validation');

exports.load = (app) => {
    app.post('/api/v1/users',validate(userValidation.creatUser()) ,controllerUser.createUser);
    app.post('/api/v1/login', validate(userValidation.login()) ,controllerUser.login);
    app.delete('/api/v1/users/:id', validate(userValidation.deleteUser()) ,controllerUser.deleteUser);
    app.get('/api/v1/users/:id',  validate(userValidation.getUser()) ,controllerUser.getUser);
    app.get( '/api/v1/users', controllerUser.getAllUser);
    app.put('/api/v1/users/:id',  validate(userValidation.updateUser()) ,controllerUser.updateUser);
    app.post('/api/v1/users/forget-password', validate(userValidation.forgetPassword()) ,controllerUser.forgetPassword);
    app.post('/api/v1/users/reset-password', validate(userValidation.resetPassword()) ,controllerUser.resetPassword);
    app.post('/api/v1/loginFB', validate(userValidation.loginFB()) ,controllerUser.loginFB);
    // app.get('/api/v1/auth', validate(userValidation.creatUser) ,controllerUser.geUserWithToken)
}
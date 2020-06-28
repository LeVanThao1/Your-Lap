const {Joi} =  require('express-validation');


// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().min(3).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    // access_token: [Joi.string(), Joi.number()],
    // birthyear: Joi.number().integer().min(1900).max(2013),
    // email: Joi.string().email({ minDomainSegments: 2 })
// }).with('username', 'birthyear').without('password', 'access_token');


const condition = {
    username: Joi.string().min(3).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
    _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    email: Joi.string().email(),
    gender: Joi.string().valid('Female', 'Male', 'Other'),
    dateOfBirth: Joi.date(),
    type: Joi.string().valid('member', 'admin'),
    address: Joi.string(),
    phoneNumber: Joi.string().alphanum().min(10).max(10),
    state: Joi.boolean(),
    facebook: Joi.object().keys({
        id: Joi.string().max(50)
    }).optional(),
    verifyCode: Joi.string(),
    verifyCodeExpireAt: Joi.date(),
    accessToken: Joi.string()
};
    
const creatUser = () => {  
    return {
        body: Joi.object({
            fullname: condition.username.required(),
            password: condition.password.required(),
            email: condition.email.required(),
        })
    };   
}

const updateUser = () => {
    return {
        params: Joi.object({
            id: condition._id.required()
        })
    };
};

const getUser = () => {
    return {
        params: Joi.object({
            id: condition._id.required()
        })
    };
}

const deleteUser = () => {
    return {
        params: Joi.object({
            id: condition._id.required()
        })
    };
}


const resetPassword = () => {
    return {
        body: Joi.object({
            code: condition.verifyCode.required(),
            password: condition.password.required(),
            email: condition.email.required(),
        })
    };
}

const forgetPassword = () => {
    return {
        body: Joi.object({
            email: condition.email.required(),
        })
    };
}


const login = () =>{
    return {
        body: Joi.object({
            password: condition.password.required(),
            email: condition.email.required(),
        })
    };
}

const loginFB = () => {
    return {
        body: Joi.object({
            accessToken: condition.accessToken.required(),
        })
    };
}

module.exports = {
    creatUser,
    updateUser,
    getUser,
    deleteUser,
    resetPassword,
    loginFB,
    login,
    forgetPassword
}
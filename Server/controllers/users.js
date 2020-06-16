const User = require('../models/users');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userDelete = await User.findOne({_id: id}).lean();
        if (!userDelete) {
            return next(new Error('USER_NOT_FOUND'));
        }
        await userRepository.updateOne({ _id: id }, {data: {$set: { deleteAt: new Date() }}} );
        return res.status(200).json({
            message : 'delete user successful',
        });
        // return ResponseSuccess('delete user successful', null, res);
    } catch (e) {
        next(e);
    }
};

const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({_id: id}).lean();
        if(!user) return next(new Error('USER_NOT_FOUND'));
        return res.status(200).json({
            message: 'User',
            user
        })
    } catch (e) {
        next(e);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const listUser = await User.find().select('-password').lean();
        return res.status(200).json({
            message: 'ListUser',
            listUser
        })
    } catch (e) {
        next(e)
    }
}
const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const salt = bcrypt.genSaltSync(2);
        console.log(data);
        const hashPassword = bcrypt.hashSync(data.password, salt);
        data.password = hashPassword;
        const createdUser = await User.create(data);
        return res.status(200).json({
            message: "create user successfully",
            createdUser
        });
    } catch (e) {
        next(e);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const salt = bcrypt.genSaltSync(2);
        const hashPassword = bcrypt.hashSync(data.password, salt);
        data.password = hashPassword;
        lodash.omitBy(data, lodash.isNull);
        const existedUser = await userRepository.getOne({where: { _id: id }, select: '_id'});
        if (!existedUser) {
            return next(new Error('USER_NOT_FOUND'));
        }
        const updateInfo = { $set: data };
        const userUpdate = await User.findOneAndUpdate({_id: id, deleteAt: undefined }, updateInfo, {
            new: true
        }).lean();
        
        return res.status(200).json({
            message : 'update successful',
            data: userUpdate,
            data_update: newValues
        });
        
    } catch (e) {
        return next(e);
    }
};

const login
const Cart = require('../models/cart');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const { ObjectId } = require('mongodb');

const deleteSP = async (req, res, next) => {
    try {
        const { cartId, productId } = req.query;
        const cart = await Cart.findOne({_id: cartId}).lean();
        if (!cart) {
            return next(new Error('CART_NOT_FOUND'));
        }
        const product = cart.cart.some((c) => c.productId.toString() === productId);
        if(!product) {
            return next(new Error('PRODUCT_DOES_NOT_EXIST_IN_CART'));
        }
        await Cart.updateOne({ _id: cart._id }, {$pull: { cart: {productId: productId}}} );
        return res.status(200).json({
            message : 'delete product in cart successful',
        });
    } catch (e) {
        next(e);
    }
};
const addSP = async (req, res, next) => {
    try {
        const { cartId, productId, price } = req.query;
        // console.log(req.query)
        const cart = await Cart.findOne({_id: cartId}).lean();
        if (!cart) {
            return next(new Error('CART_NOT_FOUND'));
        }
        const product = cart.cart.filter((c) => {
            return c.productId.toString() == productId;
        });
        let cartUpdate;
        if(product.length === 0) {
            const productCart = {
                productId: productId,
                amount: 1,
                price: +price
            }
            cartUpdate= await Cart.updateOne({ _id: cart._id }, {$push: { cart: productCart}} );
        }
        else {
            const productCart = {
                productId: productId,
                amount: parseInt(product[0].amount) + 1,
                price: +price
            }
            cartUpdate =await Cart.updateOne({ _id: cart._id }, {$set: { cart: productCart}} );
        }

        return res.status(200).json({
            message : 'add product into cart successful',
            cartUpdate
        });
    } catch (e) {
        next(e);
    }
};

const changeAmount = async (req, res, next) => {
    try {
        const { check,cartId, productId } = req.query;
        if (!check) return;
        const cart = await Cart.findOne({_id: cartId}).lean();
        if (!cart) {
            return next(new Error('CART_NOT_FOUND'));
        }
        const product = cart.cart.filter((c) => {
            return c.productId.toString() === productId;
        });
        if(product.length <= 0) {
            return next(new Error('PRODUCT_DOES_NOT_EXIST_IN_CART'))
        }
        if(check === 'true') {
            const productCart = {
                productId: productId,
                amount: parseInt(product[0].amount) + 1,
                price: product[0].price
            }
            await Cart.updateOne({ _id: cart._id }, {$set: { cart: productCart}} );
        }
        else {
            const productCart = {
                productId: productId,
                amount: parseInt(product[0].amount) - 1,
                price: product[0].price
            }
            await Cart.updateOne({ _id: cart._id }, {$set: { cart: productCart}} );
        }

        return res.status(200).json({
            message : 'change amount product in cart successful',
        });
    } catch (e) {
        next(e);
    }
};

const getCart = async (req, res, next) => {
    try {
        const {id} = req.params;
        const cart = await Cart.find({_id: id}).lean();
        return res.status(200).json({
            message: 'Cart',
            cart: cart.cart
        })
    } catch (e) {
        next(e);
    }
}
const deleteCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cartDeleted = await Cart.findOne({_id: id}).lean();
        if (!cartDeleted) {
            return next(new Error('CART_NOT_FOUND'));
        }
        await Cart.updateOne({ _id: id }, {data: {$set: { deleteAt: new Date() }}} );
        return res.status(200).json({
            message : 'delete nsx successful',
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    deleteSP,
    addSP,
    changeAmount,
    getCart,
    deleteCart
}
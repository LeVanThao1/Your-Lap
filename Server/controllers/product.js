const Product = require('../models/products');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const NSX = require('../models/NSX');
const ProductType = require('../models/productType')

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productDelete = await Product.findOne({_id: id}).lean();
        if (!productDelete) {
            return next(new Error('USER_NOT_FOUND'));
        }
        await Product.updateOne({ _id: id }, {data: {$set: { deleteAt: new Date() }}} );
        return res.status(200).json({
            message : 'delete product successful',
        });
    } catch (e) {
        next(e);
    }
};

const getProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await Product.findOne({_id: id, deleteAt: undefined}).lean().populate(
            {
                path: 'postBy',
                select: 'fullname'
            },
            {
                path: 'typeProduct NSX',
                select: 'name'
            }
        );
        if(!product) return next(new Error('PRODUCT_NOT_FOUND'));
        return res.status(200).json({
            message: 'User',
            product
        })
    } catch (e) {
        next(e);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const ListProducts = await Product.find({deleteAt: undefined}).lean().populate(
            {
                path: 'postBy',
                select: 'fullname'
            },
            {
                path: 'typeProduct NSX',
                select: 'name'
            }
        );
        return res.status(200).json({
            message: 'ListProducts',
            ListProducts
        })
    } catch (e) {
        next(e)
    }
}
const createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        // const salt = bcrypt.genSaltSync(2);
        // console.log(data);
        // const hashPassword = bcrypt.hashSync(data.password, salt);
        // data.password = hashPassword;
        console.log(data);
        // const existedNSX = await NSX.findOne({_id: data.NSX});
        // if(!existedNSX) {
        //     return new Error('NSX NOT FOUND')
        // }
        // const existedTypeProduct = await ProductType.findOne({_id: data.typeProduct});
        // if(!existedTypeProduct) {
        //     return new Error('Type Product NOT FOUND')
        // }
        // const createdProduct = await Product.create(data);
        // return res.status(200).json({
        //     message: "create product successfully",
        //     createdProduct
        // });
    } catch (e) {
        next(e);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if(data.NSX) {
            const existedNSX = await NSX.findOne({_id: data.NSX});
            if(!existedNSX) {
                return new Error('NSX NOT FOUND')
            }
        }
        if(data.typeProduct) {
            const existedTypeProduct = await ProductType.findOne({_id: data.typeProduct});
            if(!existedTypeProduct) {
                return new Error('Type Product NOT FOUND')
            }
        }
        // const salt = bcrypt.genSaltSync(2);
        // const hashPassword = bcrypt.hashSync(data.password, salt);
        // data.password = hashPassword;
        _.omitBy(data, _.isNull);
        const existedProduct = await Product.findOne({ _id: id });
        if (!existedProduct) {
            return next(new Error('USER_NOT_FOUND'));
        }
        const updateInfo = { $set: data };
        const productUpdate = await Product.findOneAndUpdate({_id: id, deleteAt: undefined }, updateInfo, {
            new: true
        }).lean();
        
        return res.status(200).json({
            message : 'update successful',
            data: productUpdate,
            data_update: updateInfo
        });
        
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
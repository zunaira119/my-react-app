const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Products = require('../models/product');
const productRouter = express.Router();
productRouter.use(bodyParser.json());
productRouter.route('/')
.get((req,res,next) => {
    Products.find(req.query)
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Products.create(req.body)
    .then((product) => {
        console.log('Product Created ', product);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    }, (err) => next(err))
    .catch((err) => next(err));
});
productRouter.route('/featured')
.get((req,res,next) => {
    Products.find({featured:true})
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    }, (err) => next(err))
    .catch((err) => next(err));
});
// .put((req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /dishes');
// })
// .delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     Dishes.remove({})
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));    
// });

productRouter.route('/productsByCategory/:id')
.get((req,res,next) => {
    Products.find({categoryId:req.params.id})
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    }, (err) => next(err))
    .catch((err) => next(err));
});
// .post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes/'+ req.params.dishId);
// })
// .put(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     Dishes.findByIdAndUpdate(req.params.dishId, {
//         $set: req.body
//     }, { new: true })
//     .then((dish) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(dish);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .delete(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
//     Dishes.findByIdAndRemove(req.params.dishId)
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });
module.exports = productRouter;
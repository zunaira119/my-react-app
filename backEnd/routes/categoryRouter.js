const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Categories = require('../models/category');
const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());
categoryRouter.route('/')
.get((req,res,next) => {
    Categories.find(req.query)
    .then((categories) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(categories);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Categories.create(req.body)
    .then((category) => {
        console.log('Category Created ', category);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(category);
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

// dishRouter.route('/:dishId')
// .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
// .get(cors.cors,(req,res,next) => {
//     Dishes.findById(req.params.dishId)
//     .populate('comments.author')
//     .then((dish) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(dish);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
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
module.exports = categoryRouter;
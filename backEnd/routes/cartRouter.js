// The dishRouter module
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Cart = require('../models/cart');
var authenticate = require('../middleware/auth');

var cartRouter = express.Router();
cartRouter.use(bodyParser.json());
cartRouter.route('/')

.all(authenticate)
// get all
.get(function(req, res, next) {
    console.log(req.user);
  Cart.find({postedBy: req.user._id})
  .populate('postedBy products')
  .then((cart) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(cart);
}, (err) => next(err))
.catch((err) => next(err));
})
// Add to favourites
.post(function(req, res, next) {
   console.log(req.user._id);
  var productId = req.body._id;
  var userId = req.user._id;

  var cartData = {
    postedBy: userId,
    products: [productId]
  };

  Cart.findOne({ postedBy: userId }, function(err, cart) {
    if(err) throw err;
      if(! cart || cart.length === 0) {
        Cart.create(cartData, function(err, car) {
          if(err) throw err;
            console.log("A favorate dish has been created!");
            res.json(car);
        });
      } else {
        if(cart.products.indexOf(productId) > -1) {
          res.json("This is allreayd in the favorite list!");
        } else {
          cart.products.push(productId);
          cart.save(function(err, car) {
            if(err) throw err;
              console.log("Added favorite dish!");
              res.json(car);
          });
        }
      }
  });
})
// Delete ALL favorites after verifying the user
.delete(function(req, res, next) {
  Cart.remove({postedBy: req.user._id}, function(err, resp) {
    if(err) throw err;
      res.json(resp);
  });
});

// Delete the individual favorites
cartRouter.route('/:productId')
.delete(authenticate, function(req, res, next) {
  var productId = req.params.productId;
  console.log(productId);
  Cart.findOne({ postedBy: req.user._id, products: productId }, function(err, cart) {
    if(err) throw err;
    cart.products.remove(productId);
    cart.save(function(err, cart) {
        if(err) throw err;
          console.log("Removed favorite from list!");
          res.json(cart);
      });
  });
});

module.exports = cartRouter;
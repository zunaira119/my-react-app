// The dishRouter module
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorite');
var authenticate = require('../middleware/auth');

var favoritesRouter = express.Router();
favoritesRouter.use(bodyParser.json());
favoritesRouter.route('/')

.all(authenticate)
// get all
.get(function(req, res, next) {
    console.log(req.user);
  Favorites.find({postedBy: req.user._id})
  .populate('postedBy products')
  .then((favorite) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorite);
}, (err) => next(err))
.catch((err) => next(err));
})
// Add to favourites
.post(function(req, res, next) {
   console.log(req.user._id);
  var productId = req.body._id;
  var userId = req.user._id;



  var favoriteDishesData = {
    postedBy: userId,
    products: [productId]
  };

  Favorites.findOne({ postedBy: userId }, function(err, favorite) {
    if(err) throw err;
      if(! favorite || favorite.length === 0) {
        Favorites.create(favoriteDishesData, function(err, favores) {
          if(err) throw err;
            console.log("A favorate dish has been created!");
            res.json(favores);
        });
      } else {
        if(favorite.products.indexOf(productId) > -1) {
          res.json("This is allreayd in the favorite list!");
        } else {
          favorite.products.push(productId);
          favorite.save(function(err, favores) {
            if(err) throw err;
              console.log("Added favorite dish!");
              res.json(favores);
          });
        }
      }
  });
})
// Delete ALL favorites after verifying the user
.delete(function(req, res, next) {
  Favorites.remove({postedBy: req.user._id}, function(err, resp) {
    if(err) throw err;
      res.json(resp);
  });
});

// Delete the individual favorites
favoritesRouter.route('/:productId')
.delete(authenticate, function(req, res, next) {
  var productId = req.params.productId;
  console.log(productId);
  Favorites.findOne({ postedBy: req.user._id, products: productId }, function(err, favores) {
    if(err) throw err;
    favores.products.remove(productId);
    favores.save(function(err, favores) {
        if(err) throw err;
          console.log("Removed favorite from list!");
          res.json(favores);
      });
  });
});

module.exports = favoritesRouter;
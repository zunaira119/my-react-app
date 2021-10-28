var jwt = require('jsonwebtoken');
const User = require('../models/user');
var config = require('../config');
var mongoose = require('mongoose');
// exports.verifyUser = function(req, res, next) {
//   let token;
//   let decoded= [];

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       token = req.headers.authorization.split(' ')[1]
//        decoded = jwt.verify(token,config.secretKey)
//     User.findById(decoded._id).select('-password').then((user)=>{
//       var id = (user._id).toString();
//         req.user = id;
//       });

//       next()
//     } catch (error) {
//       console.error(error)
//       res.status(401)
//       throw new Error('Not authorized, token failed')
//     }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized, no token')
//   }
// }


module.exports = (req, res, next) => {
  try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) return res.status(403).send("Access denied.");
      const decoded = jwt.verify(token, config.secretKey);
      req.user = decoded;
      next();
  } catch (error) {
      res.status(400).send("Invalid token");
  }
};
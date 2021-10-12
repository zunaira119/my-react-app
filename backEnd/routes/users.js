const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('../models/user');
const authenticate = require('../authenticate');
var router = express.Router();
router.use(bodyParser.json());

    router.get('/',(req, res, next) => {
        Users.find(req.query)
            .then((users) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


    // router.post('/signup', (req, res, next) => {
    //   User.findOne({username: req.body.username})
    //   .then((user) => {
    //     if(user != null) {
    //       var err = new Error('User ' + req.body.username + ' already exists!');
    //       err.status = 403;
    //       next(err);
    //     }
    //     else {
    //       return User.create({
    //         username: req.body.username,
    //         password: req.body.password});
    //     }
    //   })
    //   .then((user) => {
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json({status: 'Registration Successful!', user: user});
    //   }, (err) => next(err))
    //   .catch((err) => next(err));
    // });
   router .post('/signup', (req, res, next) => {
        Users.findOne({email: req.body.email})
        .then((user) => {
            if (user != null) {
                var err = new Error('User ' + req.body.email + ' already exists!');
                err.status = 403;
                next(err);
            } else {
                return Users.create(req.body)
            }
        })
        .then((user) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json({
                _id: user._id,
                email: user.email,
                token: authenticate.getToken(user),
            })
        }, (err) => next(err))
            .catch((err) => next(err));
    });
   router.post('/login', (req, res, next) => {

        const {email, password} = req.body

        Users.findOne({email: req.body.email})
        .then((user) => {
          console.log(user,req.body.password);
            if (user === null) {
                var err = new Error('User ' + email + ' does not exist!');
                err.status = 403;
                next(err);
            } else if (user.password != user.matchPassword(req.body.password)) {
                var err = new Error('Your password is incorrect!');
                err.status = 403;
               next(err);
            } else if (user.email === email && user.matchPassword(req.body.password)) {
                res.status(201).json({
                    _id: user._id,
                    email: user.email,
                    token: authenticate.getToken(user),
                });
                res.setHeader('Content-Type', 'text/plain');
                res.end('You are authenticated!');
            }

        }, (err) => next(err)).catch((err) => next(err));
    });


// router.post('/login', (req, res, next) => {

//   if(!req.session.user) {
//     var authHeader = req.headers.authorization;
//     console.log(authHeader);
//     if (!authHeader) {
//       var err = new Error('You are not authenticated!');
//       res.setHeader('WWW-Authenticate', 'Basic');
//       err.status = 401;
//       return next(err);
//     }

//     var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//     var username = auth[0];
//     var password = auth[1];

//     User.findOne({username: username})
//     .then((user) => {
//       if (user === null) {
//         var err = new Error('User ' + username + ' does not exist!');
//         err.status = 403;
//         return next(err);
//       }
//       else if (user.password !== password) {
//         var err = new Error('Your password is incorrect!');
//         err.status = 403;
//         return next(err);
//       }
//       else if (user.username === username && user.password === password) {
//         req.session.user = 'authenticated';
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('You are authenticated!')
//       }
//     })
//     .catch((err) => next(err));
//   }
//   else {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('You are already authenticated!');
//   }
// })

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({success: true, status: 'You are successfully logged in!'});
// });

// router.post('/login',cors.corsWithOptions, passport.authenticate('local'), (req, res) => {

//   var token = authenticate.getToken({_id: req.user._id});
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.json({success: true, token: token, status: 'You are successfully logged in!'});
// });

// router.get('/logout', (req, res) => {
//   if (req.session) {
//     req.session.destroy();
//     res.clearCookie('session-id');
//     res.redirect('/');
//   }
//   else {
//     var err = new Error('You are not logged in!');
//     err.status = 403;
//     next(err);
//   }
// });

// router.post('/login', (req, res, next) => {

//   passport.authenticate('local', (err, user, info) => {
//     if (err)
//       return next(err);

//     if (!user) {
//       res.statusCode = 401;
//       res.setHeader('Content-Type', 'application/json');
//       res.json({success: false, status: 'Login Unsuccessful!', err: info});
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         res.statusCode = 401;
//         res.setHeader('Content-Type', 'application/json');
//         res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
//       }

//       var token = authenticate.getToken({_id: req.user._id});
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json({success: true, status: 'Login Successful!', token: token});
//     }); 
//   }) (req, res, next);
// });

// router.get('/checkJWTtoken', (req, res) => {
//   passport.authenticate('jwt', {session: false}, (err, user, info) => {
//     if (err)
//       return next(err);

//     if (!user) {
//       res.statusCode = 401;
//       res.setHeader('Content-Type', 'application/json');
//       return res.json({status: 'JWT invalid!', success: false, err: info});
//     }
//     else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       return res.json({status: 'JWT valid!', success: true, user: user});

//     }
//   }) (req, res);
// });

module.exports = router;

var express = require('express');
var app = express();
var userRoutes = express.Router();
const md5 = require("md5");

// Require Item model in our routes module
var User = require('../models/User');

// Defined store route
userRoutes.route('/register').post(function (req, res) {
  User.exists({name:req.body.name}, function (err, exist) {
    if (err) {
        console.log(err)
        res.status(400).send("internal error");
    } else {
        if (exist == true) {
          res.status(200).json({'type': '-1', 'desc': 'duplicated name'});
        } else {
          let hashPassword = md5(req.body.password);
          let userObj = {
            name: req.body.name,
            password: hashPassword
          };
          let item = new User(userObj);
          item.save()
          .then(item => {
            res.status(200).json({'type': '0', 'desc': 'register success'});
          })
          .catch(err => {
            console.log(err)
            res.status(400).send("internal error");
          });
        }
    }
  });
});

//  Defined update route
userRoutes.route('/login').post(function (req, res) {
  User.find({name:req.body.name}, function (err, users){
    if (err) {
      console.log(err);
      res.status(400).send("internal error");
    } else {
      // console.log(users);
      if (users.length == 1)
      {
        let hashPassword = md5(req.body.password);
        if (users[0].password == hashPassword) {
          res.status(200).json({'type': '0', 'desc': 'login success', 'userId': users[0]._id});
          return;
        } else {
          res.status(200).json({'type': '-1', 'desc': 'bad password'});
          return;
        }
      } else {
        res.status(200).json({'type': '-2', 'desc': 'bad name'});
      }
    }
  });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if (err) {
      console.log(err)
      res.status(400).send("internal error");
    } else {
      res.json(users);
    }
  });
});

module.exports = userRoutes;
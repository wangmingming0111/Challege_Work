var express = require('express');
var app = express();
var newsRoutes = express.Router();
var mongoose = require('mongoose');

// Require Item model in our routes module
var User = require('../models/User');
var News = require('../models/News');

// Defined store route
newsRoutes.route('/add').post(function (req, res) {
  let newsObj = {
    subject: req.body.subject,
    content: req.body.content,
    userId: mongoose.Types.ObjectId(req.body.userId)
  };
  let item = new News(newsObj);
  item.save()
  .then(item => {
    res.status(200).json({'type': '0', 'desc': 'add success'});
  })
  .catch(err => {
    console.log(err)
    res.status(400).send("internal error");
  });
});

// Defined get data(index or listing) route
newsRoutes.route('/').get(function (req, res) {
  User.find(function (err, user_items){
    if (err) {
      console.log(err)
      res.status(400).send("internal error");
    } else {
      News.find(function (err, news_items){
        if (err) {
          console.log(err)
          res.status(400).send("internal error");
        } else {
          let newsObj_list = [];
          let user_count = user_items.length;
          let news_count = news_items.length;
          let news_index, user_index;
          for (news_index = 0; news_index < news_count; news_index++) 
          {
            let news_item = news_items[news_index];
            let user_name = '';
            for (user_index = 0; user_index < user_count; user_index++)
            {
              let user_item = user_items[user_index];
              if (user_item._id == news_item.userId)
              {
                user_name = user_item.name;
                break;
              }
            }

            let newsObj = {
              user: user_name,
              news: news_item
            };
            newsObj_list.push(newsObj);
          }
          res.json(newsObj_list);
        }
      });
    }
  });
});

// Defined edit route
newsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  News.findById(id, function (err, item){
    if (err) {
      console.log(err)
      res.status(400).send("internal error");
    } else {
      res.json(item);
    }
  });
});

//  Defined update route
newsRoutes.route('/update/:id').post(function (req, res) {
  News.findById(req.params.id, function(err, item) {
    if (!item) {
      // return next(new Error('Could not load Document'));
      res.status(400).send("internal error");
    } else {
      item.subject = req.body.subject;
      item.content = req.body.content;

      item.save().then(item => {
        res.json('update success');
      })
      .catch(err => {
        console.log(err)
        res.status(400).send("internal error");
      });
    }
  });
});

// Defined delete | remove | destroy route
newsRoutes.route('/delete/:id').get(function (req, res) {
  News.findByIdAndRemove({_id: req.params.id}, function(err, item){
    if (err) {
      res.json(err);
    } else {
      res.json('removed success');
    }
  });
});

module.exports = newsRoutes;
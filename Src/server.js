const express = require('express')
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB');

const userRoutes = require('./router/userApi');
const newsRoutes = require('./router/newsApi');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/news', newsRoutes);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

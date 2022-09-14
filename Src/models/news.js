var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var News = new Schema({
  subject: {
    type: String
  },
  content: {
    type: String
  },
  userId: {
    type: Schema.ObjectId, ref: 'User', required: true
  },
},{
    collection: 'news'
});

module.exports = mongoose.model('News', News);

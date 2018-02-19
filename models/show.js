const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;
const Schema = mongoose.Schema;

const User = require('./user');

let ShowSchema = new Schema({
  title: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  image: String
});

let Show = mongoose.model('Show', ShowSchema);
module.exports = Show;

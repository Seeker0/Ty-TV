const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Show = require('./show');

let UserSchema = new Schema({
  name: String,
  shows: [{ type: Schema.Types.ObjectId, ref: 'Show' }]
});

const showGetter = function(next) {
  this.populate('shows');
  next();
};

UserSchema.pre('findOne', showGetter).pre('find', showGetter);

var User = mongoose.model('User', UserSchema);
module.exports = User;

const repl = require('repl').start({});
const lodash = require('lodash');
const helpers = require('./helpers');
const models = require('./models');
// ----------------------------------------
// Libs
// ----------------------------------------
repl.context.lodash = lodash;

// ----------------------------------------
// Helpers
// ----------------------------------------
repl.context.helpers = helpers;
Object.keys(helpers).forEach(key => {
  repl.context[key] = helpers[key];
});

// ----------------------------------------
// repl.js setup for mongoose
// ----------------------------------------

// Require mongoose and start up the REPL
// Also require our models
var mongoose = require('mongoose');
var { User, Show } = require('./models');
// Use our promise based connection
// file to wrap our REPL and execute
// only once we've connected to MongoDB
require('./mongo')().then(() => {
  // Set `models` to be available in
  // the REPL by name
  repl.context.models = models;

  // Set each model to be available in the REPL
  // by name
  Object.keys(models).forEach(modelName => {
    repl.context[modelName] = mongoose.model(modelName);
  });

  // Helper function to output the result of
  // a query
  repl.context.lg = data => console.log(data);
});

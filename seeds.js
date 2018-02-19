const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('./models');
const { User, Show } = require('./models');
mongoose.Promise = require('bluebird');

const mongodbUrl = 'mongodb://localhost/hackathon_development';

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    let userSeeds = [];
    const user = new User({
      name: 'Tyrus',
      shows: []
    });
    userSeeds.push(user);

    let showSeeds = [];
    const shows = [
      { title: 'Hey Duggee', image: 'images/duggee.jpg' },
      { title: 'Blaze and the Monster Machines', image: 'images/blaze.jpeg' },
      { title: 'Rusty Rivets', image: 'images/rusty.jpeg' },
      { title: 'Mickey Mouse Clubhouse', image: 'images/mickey.jpeg' },
      { title: 'Peppa Pig', image: 'images/peppa.jpeg' },
      { title: 'The Wiggles', image: 'images/wiggles.jpeg' }
    ];

    for (let i = 0; i < shows.length; i++) {
      show = new Show({
        title: shows[i].title,
        user: user._id,
        image: shows[i].image
      });
      showSeeds.push(show);
      user.shows.push(show._id);
    }

    const collections = [userSeeds, showSeeds];
    const promises = [];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });
    return Promise.all(promises);
  }
});

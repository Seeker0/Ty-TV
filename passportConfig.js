// const passport = require('passport');
// // const LocalStrategy = require('passport-local').Strategy;
// var mongoose = require('mongoose');
// var models = require('./models');
// const dotenv = require('dotenv');
// let YoutubeV3Strategy = require('passport-youtube-v3').Strategy;
// // const env = require('./.env');
// const client_secret = require('./client_secret');

// // passport.use(
// //   new LocalStrategy(function(username, password, done) {
// //     User.findOne({ username }, function(err, user) {
// //       console.log(user);
// //       if (err) return done(err);
// //       if (!user || !user.validPassword(password)) {
// //         return done(null, false, { message: 'Invalid username/password' });
// //       }
// //       return done(null, user);
// //     });
// //   })
// // );
// //
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
//
// passport.use(
//   new YoutubeV3Strategy(
//     {
//       client_secret
//     },
//     async function(accessToken, refreshToken, profile, done) {
//       console.log(profile);
//       let user = await User.findOrCreate({ email: profile.displayName });
//       user.userName = 'Rufio';
//       await user.save();
//       return done(null, user);
//     }
//   )
// );
//
// module.exports = passport;

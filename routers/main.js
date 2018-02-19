const Express = require('express');
const router = Express.Router();
const mongoose = require('mongoose');
const { User, Show } = require('./../models');
const passport = require('passport');
mongoose.Promise = global.Promise;
const search = require('youtube-search');
const google = require('googleapis');
const YouTube = google.youtube('v3');
const urlShortener = google.urlshortener('v1');
const OAuth2 = google.auth.OAuth2;
const http = require('http');
const fetch = require('fetch');

const oauth2Client = new OAuth2(
  '813121349622-m0e5adqa92jf4s7k2t7nhcd8nnppkitg.apps.googleusercontent.com',
  'tl8BLQMy4mt-R0dkPiYpXikq',
  ['urn:ietf:wg:oauth:2.0:oob', 'http://localhost']
);

let opts = {
  maxResults: 10,
  key: process.env.YOUTUBE_CLIENT_ID
};

router.get('/', async (req, res, next) => {
  try {
    const user = await User.find();
    console.log(user[0]);

    // let result = search('hey duggee', opts, function(err, results) {
    //   if (err) return next(err);
    //   console.log(results);

    // let result = fetch.fetchUrl(
    //   'https://www.googleapis.com/youtube/v3/search?part=snippet&q=duggee',
    //   (err, meta, body) => {
    //     console.log(body.toString());
    //   }
    // );
    // .then(response => response.json())
    // .then(console.log)
    // .catch(err => next(err));

    // let searchByKeyword = async () => {
    //   var results = YouTube.Search.list('id,snippet', {
    //     q: 'dogs',
    //     maxResults: 25
    //   });
    //   for (var i in results.items) {
    //     var item = results.items[i];
    //     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    //   }
    // };
    //
    // let results = await searchByKeyword('Hey Duggee');
    // console.log(results);
    res.render('welcome/index', { user: user[0] });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/player', async (req, res, next) => {
  res.render('welcome/player');
});

module.exports = router;

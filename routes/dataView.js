const express = require('express');

const tweetData = require('../data/tweets.json');

const router = express.Router();

const tweets = [];

router.get('/data-view', (req, res, next) => {
   //tweets.push({tweetData});
    console.log(tweetData);
    res.render('data-view', {
        pageTitle: 'Data View',
        path: '/data-view'
 });
});

exports.routes = router;
exports.tweets = tweets;
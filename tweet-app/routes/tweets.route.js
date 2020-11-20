const { Router } = require('express');
const tweetsController = require('../controllers/tweets.ctrl');

const router = Router();

router.route('/post').post(tweetsController.postTweet);
router.route('/like/:tweetId').post(tweetsController.likeTweet);

module.exports = router;

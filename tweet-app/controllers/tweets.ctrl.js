const tweetsServices = require('../services/tweets.service');

class TweetsCtrl {
  static async postTweet(req, res) {
    const {
      user,
      tweet,
    } = req.body;

    await tweetsServices.postTweet(user, tweet);
    return res.status(201).json({
      data: {
        user,
        tweet
      },
      message: 'Tweet Created',
      status: true
    });
  }
}
module.exports = TweetsCtrl;

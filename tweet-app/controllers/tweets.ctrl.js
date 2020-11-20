const tweetsServices = require('../services/tweets.service');
const userServices = require('../services/user.service');

class TweetsCtrl {
  static async postTweet(req, res) {
    const { authorization } = req.headers;

    const response = await userServices.identifyUser(authorization);

    const {
      tweet,
    } = req.body;

    await tweetsServices.postTweet(response.id, tweet);
    return res.status(201).json({
      data: {
        user: response.id,
        tweet
      },
      message: 'Tweet Created',
      status: true
    });
  }

  static async likeTweet(req, res) {
    const { authorization } = req.headers;

    const response = await userServices.identifyUser(authorization);

    const {
      tweetId
    } = req.params;

    await tweetsServices.likeTweet(response.id, tweetId);
    return res.status(200).json({
      data: {
        user: response.id,
        tweet: tweetId
      },
      message: 'Tweet Liked',
      status: true
    });
  }
}
module.exports = TweetsCtrl;

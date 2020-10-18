const admin = require('firebase-admin');
const key = require('../keys.json');

admin.initializeApp(
  {
    credential: admin.credential.cert(key)
  }
);
const db = admin.firestore();

class tweetsService {
  static async postTweet(user, tweet) {
    const data = {
      user,
      tweet,
      time: new Date()
    };
    await db.collection('tweets').add(data);
  }
}
module.exports = tweetsService;

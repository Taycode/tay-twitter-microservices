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

  static async likeTweet(user, tweetId) {
    const likesRef = db.collection('likes');
    const tweetLikeQuery = await likesRef.where('user', '==', user)
      .where('tweet', '==', tweetId)
      .get();

    if (!tweetLikeQuery.empty) {
      return false;
    }

    await likesRef.add({
      tweet: tweetId,
      user,
      time: new Date()
    });
    const tweetRef = db.collection('tweets').doc(tweetId);
    await db.runTransaction(async (t) => {
      const doc = await t.get(tweetRef);
      let { numberOfLikes = 0 } = doc.data();
      numberOfLikes += 1;
      t.update(tweetRef, { numberOfLikes });
    });
    return true;
  }
}
module.exports = tweetsService;

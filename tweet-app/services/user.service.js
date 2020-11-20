const axios = require('axios');

class UserService {
  static async identifyUser(authToken) {
    const response = await axios.get('http://django-api:8000/user/identify/', {
      headers: {
        Authorization: authToken
      }
    });
    return response.data;
  }
}

module.exports = UserService;

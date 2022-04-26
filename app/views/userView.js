const User = require("./../models/User");
const UserService = require("./../services/userServices");

class UserView {
  static createUser(payload) {
    switch (payload) {
      case null: {
        return { error: "payload no existe" };
      }
    }
  }
}

module.exports = UserView;

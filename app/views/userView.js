const User = require("./../models/User");
const UserService = require("./../services/userServices");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      return { error: "payload no existe" };
    } else if (
      payload.username != "string" ||
      payload.username == null ||
      payload.name != "string" ||
      payload.name == null ||
      payload.id != number ||
      payload.id == null
    ) {
      return { error: "Necesitan tener un valor valido" };
    }
  }
}

module.exports = UserView;

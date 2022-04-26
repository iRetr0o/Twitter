const User = require("./../models/User");
const UserService = require("./../services/userServices");

class UserView {
  static createUser(payload) {
<<<<<<< HEAD
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
=======
    switch (payload) {
      case null: {
        return { error: "payload no existe" };
      }
>>>>>>> 295ef936a4433f8484151c473975e2dfd039a0af
    }
  }
}

module.exports = UserView;

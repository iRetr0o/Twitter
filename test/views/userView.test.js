const UserView = require("./../../app/views/userView");

describe("Tests para UserView", () => {
  test("1 Retornar un error al objeto cuando intento crear un nuevo usuario con un payload nulo", () => {
    const payload = null;
    const result = UserView.createUser(payload);

    expect(result.error).toMach(/payload no existe/);
  });
});

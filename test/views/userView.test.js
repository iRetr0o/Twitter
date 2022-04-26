const UserView = require("./../../app/views/userView");

describe("Tests para UserView", () => {
  test("1 Retornar un error al objeto cuando intento crear un nuevo usuario con un payload nulo", () => {
    const payload = null;
    const result = UserView.createUser(payload);

    expect(result.error).toMatch(/payload no existe/);
<<<<<<< HEAD
  });
  test("2 Retornar un error al objeto cuando intento crear un nuevo usuario con un payload con propiedades invalidas", () => {
    const payload = { username: null, name: 12, id: "id" };
    const result = UserView.createUser(payload);

    expect(result.error).toMatch(/Necesitan tener un valor valido/);
  });
  test("3 Retornando un error al objeto cuando intento crear un nuevo usuario sin las demas propiedades", () => {
    const payload = { username: "Username" };
    const result = UserView.createUser(payload);

    expect(result.error).toMatch(/Necesitan tener un valor valido/);
=======
>>>>>>> 295ef936a4433f8484151c473975e2dfd039a0af
  });
});

const UserService = require("./../../app/services/userServices");

describe("3 acutalizando el username", () => {
  test("Creando un objeto de la clase US", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    UserService.updateUserUsername(user, "carlog");
    expect(user.username).toBe("carlog");
  });
});

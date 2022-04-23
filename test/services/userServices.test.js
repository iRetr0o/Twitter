const UserService = require("./../../app/services/userServices");

describe("Prueba de unidad para la clase UserService", () => {
  test("Creando un objeto de la clase US", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    expect(user.username).toBe("iretr0o");
    expect(user.name).toBe("Oscar");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
});

const UserService = require("./../../app/services/userServices");

describe("2, Prueba de unidad para la informacion del usuario", () => {
  test("Creando un objeto de la clase US", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    const userInfoList = UserService.getInfo(user);
    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("iretr0o");
    expect(userInfoList[2]).toBe("Oscar");
    expect(userInfoList[3]).toBe("Sin bio");
  });
});

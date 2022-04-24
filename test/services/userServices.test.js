const UserService = require("./../../app/services/userServices");

describe("Prueba de unidad para la clase UserService", () => {
  test("1 Creando un objeto de la clase US", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    expect(user.username).toBe("iretr0o");
    expect(user.name).toBe("Oscar");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  test("2 Obteniendo la informacion de una lista", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    const userInfoList = UserService.getInfo(user);

    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("iretr0o");
    expect(userInfoList[2]).toBe("Oscar");
    expect(userInfoList[3]).toBe("Sin bio");
  });
  test("3 Actualizando el nombre de usuario", () => {
    const user = UserService.create(1, "iretr0o", "Oscar");
    UserService.updateUserUsername(user, "explorer");

    expect(user.username).toBe("explorer");
  });
  test("4 dando una lista de los usuarios, recibiendo la lista de los usernames", () => {
    const user1 = UserService.create(1, "explorer1", "Oscar");
    const user2 = UserService.create(2, "explorer2", "Rodrigo");
    const user3 = UserService.create(3, "explorer3", "Carlo");
<<<<<<< HEAD
    const usernames = UserService.getAllUsernames([user1, user2, user3]);

    expect(usernames).toContain("explorer1");
    expect(usernames).toContain("explorer2");
    expect(usernames).toContain("explorer3");
=======
>>>>>>> 21ed5217bbd978526ff215a660af5a9871f9cb49
  });
});

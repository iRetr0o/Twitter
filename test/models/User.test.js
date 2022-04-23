const User = require("./../../app/models/User");

describe("Prueba de unidad para la clase User", () => {
  test("Creando un Objeto User", () => {
    //Usando el código que se va usar en la app
    const user = new User(1, "iretr0o", "Oscar", "Bio");
    user.setUsername = "Gutierrez";
    user.setBio = "New Bio";
    //Aquí validamos los resultados de ese código
    //Esta es una comparación que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.username).toBe("Gutierrez");
    expect(user.bio).toBe("New Bio");
  });
});

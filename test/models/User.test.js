const User = require("./../../app/models/User");

describe("Prueba de unidad para la clase User", () => {
<<<<<<< Updated upstream
  test("Creando un Objeto User", () => {
    //Usando el código que se va usar en la app
    const user = new User(
      1,
      "iretr0o",
      "Oscar",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );
    //Aquí validamos los resultados de ese código
    //Esta es una comparación que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1);
    expect(user.username).toBe("iretr0o");
    expect(user.name).toBe("Oscar");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});
=======
    test('Creando un Objeto User', () => {
        //Usando el código que se va usar en la app
        const user = new User(1, "iretr0o", "Oscar", "Bio");
        //Aquí validamos los resultados de ese código
        //Esta es una comparación que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1);
        expect(user.username).toBe("iretr0o");
        expect(user.name).toBe("Oscar");
        expect(user.bio).toBe("Bio");
        //Verifica que el valor no sea undefined
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })
})
>>>>>>> Stashed changes

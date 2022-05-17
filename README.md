# Twitter
Simulamos la creación de la aplicación Twitter.
## ¿Cómo instalar las dependencias?
```
npm install
```

## Comandos habilitados
```
npm test 'archivo de tu prueba'
```
## Dependencias
| Nombre  | Versión | Documentación | 
| :------------: | :------------: | :------------: |
| Node | 16.14.2 | <a href="https://nodejs.org/docs/latest-v16.x/api/index.html" target="_blank"><img src="https://img.shields.io/badge/🔗 Node-Documentation-green?style=for-the-badge"></a> |
| Jest | 27.5.1  | <a href="https://jestjs.io/docs/27.x/getting-started" target="_blank"><img src="https://img.shields.io/badge/Jest-Documentation-brightgreen?style=for-the-badge&logo=jest"></a> |
## Prácticas de la semana 3
[Práctica 3](https://github.com/iRetr0o/Twitter/tree/main/test/models)
```markdown
Después de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicación `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

SPRINT 1: Creación de un modelo
 
 Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
Solución: Crear una clase User y un constructor que guarde estos parámetros. 
 
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 Solución: Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.
 
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
 
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
 ```
 
 [Práctica 4](https://github.com/iRetr0o/Twitter/tree/main/test/services)
 ```markdown
SPRINT 2: Agregar servicios

Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`.
2. El valor de `bio` deberá ser por default para todos los `user` creados.

Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`.

Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos.
```

[Práctica 5](https://github.com/iRetr0o/Twitter/tree/main/test/views)
```markdown
Sprint 3: Agregar vistas

Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` a través de `userService`. Crea un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que contenga información para crearlo.

Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
```

## ¿Qué aprendí?
- Crear nuevos proyectos de js con npm.
- Agregar dependencias.
- Agregar Jest como dependencia para pruebas de unidad.
- Hacer pruebas de unidad con Jest.
- Conoces cómo funciona TDD y sabes quienes son Ken Beck y Martin Fowler.
- Versionar paso a paso tus cambios en el proyecto.

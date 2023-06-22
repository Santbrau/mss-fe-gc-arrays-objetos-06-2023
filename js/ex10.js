// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.

let persona = {
    "nombre": "James",
    "apellidos": "Hetfield",
    "edad": 59,
    "ciudad": "Downey",
    "pais": "Estados Unidos",
    "altura": 185
};

const sacarNombreCompleto = (persona) => {

    let nombreCompleto = persona.nombre + " " + persona.apellidos;
    console.log (nombreCompleto);
};

sacarNombreCompleto (persona);
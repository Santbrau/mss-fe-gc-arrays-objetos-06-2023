// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades.

let persona = {
    "nombre": "James",
    "apellidos": "Hetfield",
    "edad": 59,
    "ciudad": "Downey",
    "pais": "Estados Unidos",
    "altura": 185
};

let {nombre, apellidos, edad, ciudad, pais, altura} = persona;

console.log (nombre);
console.log (edad);
console.log (pais);
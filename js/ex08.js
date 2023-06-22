// Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

const seRepiteAlgunElemento = (array1, array2) => {

    let elementosRepetidos = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
        elementosRepetidos.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i]) && !elementosRepetidos.includes(array2[i])) {
        elementosRepetidos.push(array2[i]);
        }
    }

    return elementosRepetidos;
}

let elementosRepetidos = seRepiteAlgunElemento(javascript1, javascript2);

console.log(elementosRepetidos);
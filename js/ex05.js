// . Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const intercalaArrays = (array1, array2) => {

    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
    resultado.push(array1[i]);
    resultado.push(array2[i]);
    }

    array1.length = 0;
    array2.length = 0;

    return resultado;
}

let resultadoIntercalado = intercalaArrays(arrayUno, arrayDos);

console.log(resultadoIntercalado);
console.log(arrayUno);
console.log(arrayDos);
// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

let diezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

const separarParesDeImpares = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array [i] % 2 == 0) {
        pares.push (array[i]);
        } else {
        impares.push (array[i]);
        }
    }
}

separarParesDeImpares (diezNumeros);

let resultado = pares.concat (impares);

console.log (resultado);
// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

let diezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayMayores = [];

const mayoresDeCinco = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array [i] > 5) {
        arrayMayores.push (array[i]);
        }
    }
}


mayoresDeCinco (diezNumeros)

console.log (arrayMayores);
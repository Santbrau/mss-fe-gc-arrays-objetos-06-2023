// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.


var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function longitud (array) {
    console.log("Longitud del array: " + array.length);
}

function aleatorio (array) {
    var elementoAleatorio = array[Math.floor (Math.random () * array.length)];
    console.log("Elemento aleatorio: " + elementoAleatorio);
}

longitud (array);
aleatorio (array);


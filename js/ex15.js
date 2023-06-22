// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.

class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
    }
}

let risotto = new Receta (
    "Risotto de Setas",
    "40-60 min",
    ["arroz", "setas", "caldo de pollo", "mantequilla", "parmesano en polvo", "vino blanco", "cebolla"]
);

let boloñesa = new Receta (
    "Salsa Boloñesa",
    "90 min",
    ["carne picada", "zanahoria", "aceite", "sal", "tomate triturado", "vino tinto", "cebolla"]
);

let gulash = new Receta(
    "Gulash",
    "120 min",
    ["ternera troceada", "pimentón dulce", "caldo de carne", "sal", "tomate concentrado", "vino tinto", "cebolla"]
);


let recetas = [risotto, boloñesa, gulash];


const laReceta = (recetas) => {
    for (let i = 0; i < recetas.length; i++) {
        console.log(recetas[i]);
    }
}

laReceta(recetas);
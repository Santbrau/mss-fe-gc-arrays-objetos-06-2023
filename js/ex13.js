// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.

let receta = {
    "nombre": "Risotto de Setas",
    "tiempoPreparacion": "40-60 min",
    "ingredientes": [
        "arroz", "setas", "caldo de pollo", "mantequilla", 
        "parmesano en polvo", "vino blanco", "cebolla"
    ]
};

const laReceta = (receta) => {

    console.log(receta.nombre);
    console.log(receta.tiempoPreparacion);

    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log(receta.ingredientes[i]);
    }
}

laReceta(receta);
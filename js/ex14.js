// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array

let receta = [
    {
        "nombre": "Risotto de Setas",
        "tiempoPreparacion": "40-60 min",
        "ingredientes": [
            "arroz", "setas", "caldo de pollo", "mantequilla", 
            "parmesano en polvo", "vino blanco", "cebolla"
        ]
    },

    {
        "nombre": "Salsa Boloñesa",
        "tiempoPreparacion": "90 min",
        "ingredientes": [
            "carne picada", "zanahoria", "aceite", "sal", 
            "tomate triturado", "vino tinto", "cebolla"
        ]
    },

    {
        "nombre": "Gulash",
        "tiempoPreparacion": "120 min",
        "ingredientes": [
            "ternera troceada", "pimentón dulce", "caldo de carne", "sal", 
            "tomate concentrado", "vino tinto", "cebolla"
        ]
    }

];


const laReceta = (receta) => {

    for (let i = 0; i < receta.length; i++) {
        console.log(receta[i]);
    }
}

laReceta(receta);
// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.

let lideres = [
    {
        "nombre": "Varian",
        "facción": "Alianza",
        "ciudad": "Ventormenta"
    },
    {
        "nombre": "Thrall",
        "facción": "Horda",
        "ciudad": "Orgrimmar"
    },
    {
        "nombre": "Arthas",
        "facción": "Plaga",
        "ciudad": "Lordaeron"
    }
];

const sacarPropiedad = (objeto, propiedad) =>{
    for (let i = 0; i < objeto.length; i++) {
    console.log(objeto[i][propiedad]);
    }
}

sacarPropiedad(lideres, "facción");
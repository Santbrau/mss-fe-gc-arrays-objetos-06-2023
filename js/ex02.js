// Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.

var arrayPlanetas = ["Mercurio", "Venus", "La Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón"];

function sistemaSolar (array){
    for (var i = 0; i < arrayPlanetas.length; i++) {
        console.log (arrayPlanetas[i])
    }
}

sistemaSolar (arrayPlanetas);
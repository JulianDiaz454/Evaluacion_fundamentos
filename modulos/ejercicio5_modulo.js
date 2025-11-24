// Ejercicio 5

// Se crea una funcion flecha para buscar un elemento en un arreglo
export const buscarElemento = (arreglo_elementos, elemento_buscado) => {
    // Se crea una variable para indicar si se encontro el elemento
    let encontrado = false;

    // Bucle para recorrer el arreglo
    for (let i = 0; i < arreglo_elementos.length; i++) {
        // Se verifica si el elemento actual es igual al buscado
        if (arreglo_elementos[i] === elemento_buscado) {
            encontrado = true;
            break; // Salimos del bucle si encontramos el elemento
        }
    }
    // Retornamos la bandera
    return encontrado;
}
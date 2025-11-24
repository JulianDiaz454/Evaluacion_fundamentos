// Importamos las funciones necesarias
import { buscarElemento } from "./modulos/ejercicio5_modulo.js";

// Ejercicio 5

// Se solicita la cantidad de elemenstos para el arreglos 
let cantidad_elementos = prompt("Ingrese la cantidad de elementos para el arreglo");

// Convertimos el valor a entero
cantidad_elementos = parseInt(cantidad_elementos);

// Se crea un arreglo para almacenar los elementos
let elementos = [];

// Se crea un bucle para recibir todos los elementos
for (let i = 0; i < cantidad_elementos; i++) {
    // Le pedimos un elementos al usuario
    let elemento = prompt(`Ingrese el elemento ${i + 1}:`);

    // Almacenamos el elemento en el arreglo
    elementos.push(elemento);
}

// Le pedimos al usuario el elemento a buscar
let elemento_buscar = prompt("Ingrese el elemento a buscar en el arreglo:");

// Llamamos la función para buscar el elemento
let resultado_busqueda = buscarElemento(elementos, elemento_buscar);

// Condicion para mostrar el resultado
if (resultado_busqueda) {
    alert(`El elemento "${elemento_buscar}" esta en el arreglo.`);
} else {
    alert(`El elemento "${elemento_buscar}" no esta en el arreglo.`);
}


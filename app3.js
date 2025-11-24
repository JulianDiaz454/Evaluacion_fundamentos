// Importamos la función desde el módulo
import { GenerarTabla } from './modulos/ejercicio3_modulo.js';

// Ejercicio 3

// Se crea un bucle para mostrar tantas tablas como el usuario quiera
while (true) {
    // Solicitamos el numero al usuario
    let numero_multiplicar = prompt("Ingrese el número para generar su tabla de multiplicar o -1 para salir:");

    // Convertimos el valor a entero
    numero_multiplicar = parseInt(numero_multiplicar);

    // Condición de salida del bucle
    if (numero_multiplicar === -1) {
        break;
    }

    // Obtenemos el arreglo de la tabla
    let tabla_resultados = GenerarTabla(numero_multiplicar);

    // Mostramos los resultados con un bucle
    for (let i = 0; i < tabla_resultados.length; i++) {
        alert(`${numero_multiplicar} x ${i + 1} = ${tabla_resultados[i]}`);
    }
}
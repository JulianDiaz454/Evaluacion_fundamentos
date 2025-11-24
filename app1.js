// Se importa la funcion desde el modulo
import { promedioNotas } from './modulos/ejercicio1_modulo.js';

// Ejercicio 1

// Primero tomamos la cantidad de notas
let cantidad_notas = prompt("Ingrese la cantidad de notas a promediar:"); 

// Convertimos el valor a entero
cantidad_notas = parseInt(cantidad_notas);

// Se crea un arreglo para almacenar las notas
let notas = [];

// Se crea un bucle para recibir todas las notas
for (let i = 0; i < cantidad_notas; i++) {
    // Tomamos el valor de cada nota
    let nota = prompt(`Ingrese la nota ${i + 1}:`);
    // COnvertimos el tipo de dato
    nota = parseFloat(nota);
    // Almacenamos la nota en el arreglo
    notas.push(nota);
}

// Llamamos la funcion para calcular el promedio y obtener el mensaje
let resultado = promedioNotas(notas);

// Mostramos el resultado al usuario
alert(resultado);
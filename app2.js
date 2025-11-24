// Llamamos la funcion desde el modulo
import { controlarAcceso } from './modulos/ejercicio2_modulo.js'; 

// Ejercicio 2

// Solicitamos los datos de validación al usuario
let edad_usuario = prompt("Ingrese su edad:");
let contraseña_usuario = prompt("Ingrese su contraseña:");

// Ingresamos los datos a las funciones
let resultado = controlarAcceso(edad_usuario, contraseña_usuario);

// Mostramos el resultado al usuario
alert(resultado);

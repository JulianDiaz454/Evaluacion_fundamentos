// Ejercicio 1

// Creamos una funcion declarada para determinar el promedio de notas
export function promedioNotas(arreglo_notas) {

    // Se crea una variable para sumar los datos
    let suma_notas = 0;

    // Bucle para sumar las notas
    for (let i = 0; i < arreglo_notas.length; i++) {
        suma_notas += arreglo_notas[i];
    }

    // Determinamos el promedio
    let promedio = suma_notas / arreglo_notas.length;

    // Determinamos el rendimiento
    if (promedio >= 4.5) {
        // Creamos un mensaje
        let mensaje = `El promedio es ${promedio.toFixed(2)} - Rendimiento: Alto`;
    } else if (promedio >= 3.0 && promedio < 4.5) {
        // Creamos un mensaje
        let mensaje = `El promedio es ${promedio.toFixed(2)} - Rendimiento: Medio`
    } else if (promedio < 3.0) {
        // Creamos un mensaje
        let mensaje = `El promedio es ${promedio.toFixed(2)} - Rendimiento: Bajo`
    }

    // Retornamos el mensaje
    return mensaje;
}
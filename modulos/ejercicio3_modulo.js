// Ejericicio 3

// Se crea una función flecha para generar una tabla de multiplicar
export const GenerarTabla = (numero_multiplicar) => {
    // Arreglo para guardar los resultados
    let tabla_multiplicar = [];

    // Generamos un ciclo para crear la tabla
    for (let i = 1; i <= 10; i++) {
        // Calculamos el area
        let resultado = i * numero_multiplicar;
        // Guardamos los resultados en un arreglo
        tabla_multiplicar.push(resultado);
    }
    // Retornamos el arreglo con la tabla
    return tabla_multiplicar;
}
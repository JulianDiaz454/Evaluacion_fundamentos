// Ejercicio 4

// Función expresada para calcular el precio final
export const precioFinal = function() {
    // Solicitamos la cantidad de productos
    let cantidad = prompt("Ingrese la cantidad de productos:");

    // Convertimos la cantidad a entero
    cantidad = parseInt(cantidad);

    // Se crea una variable para el total a pagar
    let impuesto_acumulado = 0;

    // Con un bucle tomamos todos los productos
    for (let i = 0; i < cantidad; i++) {
        // Solicitamos el valor del producto
        let valor_producto = prompt(`Ingrese el valor del producto ${i + 1}:`);
        // Convertimos el valor a flotante
        valor_producto = parseFloat(valor_producto);
        // Solicitamos el valor del impuesto
        let impuesto = prompt(`Ingrese el porcentaje de impuesto para el producto ${i + 1}:`);
        // Convertimos el impuesto a flotante
        impuesto = parseFloat(impuesto);

        // Calculamos el impuesto usando la función declarada
        let valor_impuesto = calcularImpuesto(valor_producto, impuesto);

        // Acumulamos el impuesto al total
        impuesto_acumulado += valor_impuesto;
    }

    // Retornamos el total a pagar
    return impuesto_acumulado;
}

// Función declarada para determinar el impuesto 
export function calcularImpuesto(valor_producto, impuesto) {
    // Calculamos el impuesto    
    let valor_impuesto = (valor_producto * impuesto) / 100;
    // Retornamos el valor del impuesto
    return valor_impuesto;
}
// Ejericico 2

// Se crea una función expresada para controlar el acceso
export const controlarAcceso = function(edad_usuario, contraseña_usuario) {
    // Se definen variables para validar
    const edad = 18;
    const contraseña = "julian12345";

    // Validamos el acceso 
    if (edad_usuario >= edad && contraseña_usuario === contraseña) {
        let mensaje = `Acceso concedido`;
        // Retornamos el mensaje
        return mensaje;
    } else {
        let mensaje = `Acceso denegado`;
        // Retornamos el mensaje
        return mensaje;
    }
}
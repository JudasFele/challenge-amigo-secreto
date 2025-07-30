let amigos = [];

function agregarAmigo(){
//Capturar el valor del campo de entrada: para obtener el texto ingresado por el usuario.
    let nombreAmigo = document.getElementById("amigo").value;
//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (nombreAmigo == ""){
            alert("Por favor, inserte un nombre");
        } else {
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
            amigos.push(nombreAmigo);
//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
            limpiarCaja();
            console.log(amigos);
        }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

let amigos = [];

function agregarAmigo(){
//Capturar el valor del campo de entrada: para obtener el texto ingresado por el usuario.
    let nombreAmigo = document.getElementById("amigo").value;
//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (nombreAmigo == ""){
            alert("Por favor, inserte un nombre");
        } else {
            if(amigos.includes(nombreAmigo)){
                limpiarCaja();
                alert("No se permiten nombres repetidos");
            } else{
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
                amigos.push(nombreAmigo);
//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
                limpiarCaja();            
                lista();
            }
        }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function lista(){
    let listaExistente = document.getElementById('listaAmigos');
    let nuevoElemento = document.createElement('li');

    for (let i = 0; i < amigos.length; i++) {
        nuevoElemento.textContent = amigos[i];
        listaExistente.appendChild(nuevoElemento);
    }
}

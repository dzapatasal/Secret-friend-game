
// Variables globales
let nombreListaUsuario = {};
let amigos = [];
let elementoLiDivHTML;

// Capturar el valor del campo de entrada:
function agregarAmigo() {
    let nombreListaUsuario = document.getElementById('amigo').value;
    // Validar la entrada
    if (nombreListaUsuario == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        // Actualizar el array de amigos
        amigos.push(nombreListaUsuario);
        //console.log(nombreListaUsuario);
        console.log(amigos);
        // Limpiar el campo de entrada:
        document.querySelector('#amigo').value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    // Se obtiene el elemento <ul> por su id del HTML y es aqui donde se mostraran los amigos
    let elementoLiDivHTML = document.getElementById("listaAmigos");

    // Limpiar la lista antes de volver a agregar los elementos
    elementoLiDivHTML.innerHTML = '';

    // Recorrer el array y agregar elementos <li> a la lista
    amigos.forEach(function (amigo) {
        let elementoLiHTML = document.createElement("li"); // Creacion de un elemento HTML <li>
        elementoLiHTML.textContent = amigo; // Asignar el texto del array
        elementoLiDivHTML.appendChild(elementoLiHTML);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let elementoLiDivHTML2 = document.getElementById("resultado"); // Se obtiene el elemento <ul> por su id del HTML y es aqui donde se mostraran los amigos
        let elementoLiHTML2 = document.createElement("li"); // Creacion de otro elemento HTML <li>
        elementoLiHTML2.textContent = amigoSecreto; // Asignar el texto del array
        elementoLiDivHTML2.appendChild(elementoLiHTML2);

        // Desabilito el boton <Sortear amigo>
        document.getElementById('sorteo').setAttribute('disabled', true);
        // Desabilito el botón <Añadir>
        document.getElementById('agregarAmigos').disabled = true;
        // Habilito el botón <Nuevo juego>
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function reiniciarJuego() {
    // Activacion del boton <Añadir>
    document.getElementById('agregarAmigos').removeAttribute('disabled');
    // Activacion del boton <Sortear amigo>
    document.getElementById('sorteo').removeAttribute('disabled');

    // Limpiar lista de amigos
    amigos = [];
    // Limpiar la lista de nombres en el HTML
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}
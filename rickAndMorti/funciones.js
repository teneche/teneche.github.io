// funciones.js
function crearTarjetaUsuario(item) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = `${item.image}`;
    imagen.alt = `${item.name}`;

    const nombre = document.createElement("h2");
    nombre.textContent = `${item.name}`;

    const estado = document.createElement("span");
    estado.textContent = `${item.status}`;

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(estado);

    return tarjeta;
}


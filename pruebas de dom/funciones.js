

export function crearTarjetaUsuario(character) {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const imagen = document.createElement("img");
    imagen.src = `${character.image}`;
    imagen.alt = `${character.name}`;

    const nombre = document.createElement("h2");
    nombre.textContent = `${character.name}`;

    const estado = document.createElement("span");
    estado.textContent = `${character.status}`;

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(estado);

    return tarjeta;
}

export function crearTarjetaLocation(location) {


    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h2");
    nombre.textContent = `${location.name}`;

    const tipo = document.createElement("h3");
    tipo.textContent = `${location.type}`;

    const dimension = document.createElement("span");
    dimension.textContent = `${location.dimension}`;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(tipo);
    tarjeta.appendChild(dimension);

    return tarjeta;
}

export function crearTarjetaEpisode(episodio) {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h2");
    nombre.textContent = `${episodio.name}`;

    const fecha_emision = document.createElement("h3");
    fecha_emision.textContent = `${episodio.air_date}`;

    const e_episodio = document.createElement("span");
    e_episodio.textContent = `${episodio.episode}`;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(fecha_emision);
    tarjeta.appendChild(e_episodio);

    return tarjeta;
}



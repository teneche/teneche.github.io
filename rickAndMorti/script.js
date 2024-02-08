
// link de los personajes


document.getElementById('btnObtenerDatos').addEventListener('click', function () {
    const selectedDataType = document.getElementById('selectTipoDato').value;

    const baseURL = "https://rickandmortyapi.com/api/";
    const endpoint = `${selectedDataType}`; // o cualquier otro fragmento específico de la API que necesites
    const linkApi = `${baseURL}${endpoint}`;

    if(endpoint.value==="character"){
        
    }

    fetch(linkApi)
        .then(response => response.json())
        .then(data => {
            const main = document.getElementsByTagName("main")[0];
            
            data.results.forEach(character => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                const imagen = document.createElement("img");
                imagen.src = character.image;
                imagen.alt = character.name;

                const nombre = document.createElement("h2");
                nombre.textContent = character.name;

                const estado = document.createElement("span");
                estado.textContent = character.status;

                tarjeta.appendChild(imagen);
                tarjeta.appendChild(nombre);
                tarjeta.appendChild(estado);

                main.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
});






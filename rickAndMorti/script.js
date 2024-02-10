
// link de los personajes


document.getElementById('btnObtenerDatos').addEventListener('click', function () {
    const selectedDataType = document.getElementById('selectTipoDato').value;

    const baseURL = "https://rickandmortyapi.com/api/";
    const endpoint = `${selectedDataType}`; // o cualquier otro fragmento específico de la API que necesites
    const linkApi = `${baseURL}${endpoint}`;
    var dato1;
    var dato2;
    var dato3;

    if(endpoint==="character"){
        dato1="image";
        dato2="name";
        dato3="status";           
    }
    if (endpoint === "episode") {
        dato1 = "air_date";
        dato2 = "name";
        dato3 = "episode";
    }
    if (endpoint === "location") {
        dato1 = "dimension";
        dato2 = "name";
        dato3 = "type";
    }
    
    

    fetch(linkApi)
        .then(response => response.json())
        .then(data => {
            const main = document.getElementsByTagName("main")[0];
            main.innerHTML="";
            
            data.results.forEach(item => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                const imagen = document.createElement("img");
                imagen.src = `${item[dato1]}`;
                imagen.alt = `${item[dato1]}`;

                const nombre = document.createElement("h2");
                nombre.textContent = `${item[dato2]}`;

                const estado = document.createElement("span");
                estado.textContent = `${item[dato3]}`;

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






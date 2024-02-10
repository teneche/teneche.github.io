import {
    crearTarjetaUsuario, crearTarjetaEpisode,
    crearTarjetaLocation
} from './funciones.js';

let funcion;

document.getElementById('btnObtenerDatos').addEventListener('click', function () {
    const selectedDataType = document.getElementById('selectTipoDato').value;

    const baseURL = "https://rickandmortyapi.com/api/";
    const endpoint = `${selectedDataType}`; // o cualquier otro fragmento específico de la API que necesites
    let linkApi = "";

    if (endpoint === "character") {
        linkApi = `${baseURL}${endpoint}`;
        funcion = crearTarjetaUsuario;
    }
    if (endpoint === "episode") {
        linkApi = `${baseURL}${endpoint}`;
        funcion = crearTarjetaEpisode;
    }
    if (endpoint === "location") {
        linkApi = `${baseURL}${endpoint}`;
        funcion = crearTarjetaLocation;
    }

    fetch(linkApi)
        .then(response => response.json())
        .then(data => {
            const main = document.getElementsByTagName("main")[0];
            // Limpiar el contenido del elemento <main>
            main.innerHTML = '';
            
            data.results.forEach(item => {

                main.appendChild(funcion(item));
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
});



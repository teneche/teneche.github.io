// Importar el archivo de funciones
import { crearTarjetaUsuario } from './funciones';
// link de los personajes


document.getElementById('btnObtenerDatos').addEventListener('click', function () {
    const selectedDataType = document.getElementById('selectTipoDato').value;

    const baseURL = "https://rickandmortyapi.com/api/";
    const endpoint = `${selectedDataType}`; // o cualquier otro fragmento específico de la API que necesites
    const linkApi = `${baseURL}${endpoint}`;


    // Luego puedes usar la función en tu código
    fetch(linkApi)
        .then(response => response.json())
        .then(data => {
            const main = document.getElementsByTagName("main")[0];

            data.results.forEach(item => {
                console.log(item);
                // Utilizar la función importada para crear las tarjetas de usuario
                const tarjeta = crearTarjetaUsuario(item);
                main.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
})
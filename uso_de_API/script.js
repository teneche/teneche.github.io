
// Utilizar la API Fetch para obtener datos de una API

document.getElementById('btnObtenerDatos').addEventListener('click', function () {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            // Manipular el DOM con los datos obtenidos
            const datosLista = document.getElementById('datos-lista');
            datosLista.innerHTML = '';

            data.forEach(item => {
                const listItem = document.createElement('li');

                // aca se esta agregando el dato de la API
                listItem.textContent = item.name;
                datosLista.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
    }
)


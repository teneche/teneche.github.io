const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '20a1200e82mshe304e07ed692028p15e214jsnbd158b132dd5',
        'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
    }
};
fetch(url,options)
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

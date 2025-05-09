console.log('Inicio fetch');

const apiURL = 'https://rickandmortyapi.com/api/character'

fetch(apiURL)
  .then(response => response.json())
  .then(personajes => {
    // nombres de los personajes
    console.log('Personajes obtenidos', personajes.results.map(personaje => personaje.name));
  })
  .catch(error => {
    console.error('Error en la peticion', error);
  }).finally(() => {
    console.log('Finalizacion de la peticion');
  });
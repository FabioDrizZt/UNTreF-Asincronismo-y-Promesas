console.log('Inicio fetch');

async function getPersonajes (url) {
  try {
    const response = await fetch(url)
    const personajes = await response.json();
    return personajes.results.map(personaje => personaje.name);
  } catch (error) {
    throw new Error("Error en la peticion: " + error.message);
  }
}
try {
  const personajes = await getPersonajes('https://rickandmortyapi.com/api/character');
  console.table(personajes);
} catch (error) {
  console.log("error: ", error.message);
}

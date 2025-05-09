// IIFE = Immediately Invoked Function Expression
// Es una funcion que se ejecuta inmediatamente
// Cuando se define una funcion con la palabra reservada function
// Es posible usar una IIFE para crear un objeto

;(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const personajes = await response.json();
  console.table(personajes.results.map(personaje => personaje.name));
})()

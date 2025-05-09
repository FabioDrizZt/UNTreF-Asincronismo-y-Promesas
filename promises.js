console.log('inicio promesas');

// Definimos una funcion que devuelve una promesa
const miOperacionAsincronaConPromesa = () => {
  return new Promise((resolve, reject) => {
    console.log('Promesa creada');
    const nroAleatorio = Math.floor(Math.random() * 100);
    if (nroAleatorio < 50) {
      resolve(nroAleatorio);
    } else {
      reject(new Error(`Error en la promesa nro obtenido : ${nroAleatorio}`));
    }
  });
}

// usamos la promesa creada en miOperacionAsincronaConPromesa
const miPromesa = miOperacionAsincronaConPromesa();

// Llamamos a miPromesa.then con dos parametros
miPromesa.then(resultado => {
  console.log('Promesa resuelta', resultado);
}).catch(error => {
  console.error('Error en la promesa', error);
}).finally(() => {
  console.log('Finalizacion de la promesa');
  // Es util usar finally para ejecutar codigo despues de la promesa
  // Como por ejemplo cerrar una conexion a una base de datos
  // o cerrar un socket, tareas de limpieza, liberacion de memoria, etc.
  // Logger
});
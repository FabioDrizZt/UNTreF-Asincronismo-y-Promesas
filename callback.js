console.log('Inicio callback');

const operacionConCallback = (nro1, nro2, callback) => {
  // setTimeout es una funcion que ejecuta una funcion despues de un tiempo
  setTimeout(() => {
    // callback es una funcion que se ejecuta despues de la funcion setTimeout
    callback(nro1, nro2);
  }, Math.random()*1000); // 1000 milisegundos, el tiempo que espera setTimeout
};

// Definimos algunas funciones matematicas que se ejecuten despues de setTimeout
const suma = (a, b) => console.log("Suma con callback", a + b);
const resta = (a, b) => console.log("Resta con callback", a - b);
const multiplicacion = (a, b) => console.log("Multiplicacion con callback", a * b);

// Llamamos a operacionConCallback con los parametros 10 y 20 y la funcion callback
operacionConCallback(10, 20, suma);
operacionConCallback(10, 20, resta);
operacionConCallback(10, 20, multiplicacion);

console.log('Mensaje mostrado despues de las operaciones con callback');
console.log('Fin callback');
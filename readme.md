# 🚀 UNTREF - Asincronismo y Promesas en JavaScript

¡Bienvenido/a! Este repositorio contiene ejemplos prácticos y explicaciones sobre el manejo del asincronismo en JavaScript, abordando desde callbacks hasta promesas y async/await. Ideal para estudiantes que desean comprender cómo gestionar operaciones que no se resuelven de manera inmediata en el lenguaje.

---

## 📚 Temas tratados

- Callbacks
- Promesas
- Fetch API
- Async/Await
- Manejo de errores (try/catch/finally)
- IIFE (Funciones autoejecutables)
- Ejemplo de servidor asíncrono con Node.js

---

## ⏳ ¿Qué es el asincronismo?
El asincronismo permite que ciertas tareas se ejecuten en segundo plano, sin bloquear el flujo principal del programa. Es fundamental en JavaScript, especialmente en operaciones como peticiones a servidores, lectura de archivos, temporizadores, etc.

---

## 🔄 Callbacks
Un **callback** es una función que se pasa como argumento a otra función y se ejecuta después de que ocurre un evento o se completa una tarea asíncrona.

```js
const operacionConCallback = (nro1, nro2, callback) => {
  setTimeout(() => {
    callback(nro1, nro2);
  }, Math.random()*1000);
};

operacionConCallback(10, 20, (a, b) => console.log(a + b));
```

**Ventaja:** Sencillo para tareas simples.  
**Desventaja:** Puede llevar al "callback hell" en flujos complejos.

---

## 🧩 Promesas
Una **promesa** es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Permite encadenar acciones y manejar errores de forma más clara.

```js
const miOperacionAsincronaConPromesa = () => {
  return new Promise((resolve, reject) => {
    const nroAleatorio = Math.floor(Math.random() * 100);
    if (nroAleatorio < 50) {
      resolve(nroAleatorio);
    } else {
      reject(new Error('Error en la promesa'));
    }
  });
}

miOperacionAsincronaConPromesa()
  .then(resultado => console.log('Resuelta', resultado))
  .catch(error => console.error('Error', error))
  .finally(() => console.log('Finalización de la promesa'));
```

---

## 🌐 Fetch API
Permite realizar peticiones HTTP de forma sencilla y basada en promesas.

```js
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## 💤 Async/Await
Sintaxis moderna para trabajar con promesas de forma más legible y estructurada.

```js
async function getPersonajes(url) {
  try {
    const response = await fetch(url);
    const personajes = await response.json();
    return personajes.results.map(p => p.name);
  } catch (error) {
    throw new Error('Error en la petición');
  }
}

(async () => {
  try {
    const personajes = await getPersonajes('https://rickandmortyapi.com/api/character');
    console.table(personajes);
  } catch (error) {
    console.error(error);
  }
})();
```

---

## 🛡️ Manejo de errores: try/catch/finally
Permite capturar y gestionar errores en bloques de código, tanto síncronos como asíncronos (con async/await).

```js
try {
  // Código que puede fallar
} catch (error) {
  // Manejo del error
} finally {
  // Código que siempre se ejecuta
}
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)
Una función que se ejecuta inmediatamente después de ser definida. Puede ser útil para encapsular lógica asíncrona.

```js
(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const personajes = await response.json();
  console.table(personajes.results.map(p => p.name));
})();
```

---

## 🖥️ Servidor asíncrono con Node.js
Ejemplo de servidor HTTP que simula operaciones asíncronas usando promesas y async/await.

```js
const http = require('http');

function simulateSuccess() {
  return new Promise(resolve => setTimeout(() => resolve({ result: 'OK' }), 1000));
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/success') {
    const result = await simulateSuccess();
    res.end(JSON.stringify(result));
  }
});

server.listen(3000);
```

---

## 📖 Conclusión
El manejo del asincronismo es esencial para desarrollar aplicaciones eficientes y reactivas en JavaScript. Este repositorio te brinda ejemplos y explicaciones para dominar desde los callbacks hasta las técnicas modernas con promesas y async/await.

¡Explora los archivos y experimenta! ✨

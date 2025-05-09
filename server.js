const http = require('http');

function simulateSuccess () {
  console.log('[LOG] Simulando un suceso/operacion exitosa');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ result: 'Operacion exitosa' });
    }, Math.random() * 1000);
  });
}

function simulateError () {
  console.log('[LOG] Simulando un error/operacion fallida');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Error en la operacion'));
    }, Math.random() * 1000);
  });
}

function simulateTimeout () {
  console.log('[LOG] Simulando un timeout');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Demore mucho pero aca esta tu resultado');
    }, 10000);
  });
}

const server = http.createServer(async (req, res) => {
  console.log('[LOG] Recibido peticion');
  // json en la cabecera
  res.setHeader('Content-Type', 'application/json');
  const url = req.url;
  if (url === '/success') {
    // simulamos con await una operacion exitosa
    try {
      const result = await simulateSuccess();
      res.end(JSON.stringify(result));
    } catch (error) {
      res.end(JSON.stringify({ error: error.message }));
    }
  } else if (url === '/error') {
    // simulamos con await una operacion exitosa
    try {
      const result = await simulateError();
      res.end(JSON.stringify(result));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }
  } else if (url === '/delayed') {
    // simulamos con await una operacion que demora mucho
    try {
      const result = await simulateTimeout();
      res.end(JSON.stringify(result));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: error.message }));
    }
  } else {
    res.end(JSON.stringify({ error: 'URL no encontrada' }));
  }
});

server.listen(3000, () => {
  console.log('[LOG] Servidor iniciado en el puerto 3000');
  console.log('http://localhost:3000/success');
  console.log('http://localhost:3000/error');
  console.log('http://localhost:3000/delayed');
  console.log('http://localhost:3000/inexistente');
});
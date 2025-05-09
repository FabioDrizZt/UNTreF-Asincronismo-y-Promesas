const divide = (numero1, numero2) => {
  if (numero2 === 0) {
    // throw crea una excepcion
    // la función se detiene y se ejecuta catch
    throw new Error('No se puede dividir por cero');
  }
  return numero1 / numero2;
}

try {
  const resultado = divide(10, 0);
  console.log('Resultado', resultado);
} catch (error) {
  console.error('Error', error.message);
} finally {
  console.log('Finalizacion');
}
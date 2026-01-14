// EJERCICIO 3. convertDoubleSpaceToSingle
/* Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

const output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces" */

function convertDoubleSpaceToSingle(str) {
  return str.replace(/  /g, ' ');
}

const output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"
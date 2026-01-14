// EJERCICIO 1. computeAverageLengthOfWords
/* Escribe una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.


Ejemplo de entrada:

const output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6 */

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}

const output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
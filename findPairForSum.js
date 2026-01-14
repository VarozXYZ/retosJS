// EJERCICIO 5. findPairForSum
/* Dada una lista de números enteros no negativos y una suma objetivo, encuentra un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5] */

function findPairForSum(array, number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
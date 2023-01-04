//* Programa una función que invierta las palabras de una cadena de texto, ejemplo. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function reverseText(text) {
    return text.split('').reverse().join('');
}

const result = reverseText('Hola Mundo');
console.log( result );


const reverseText2 = (text) => text.split('').reverse().join('');
const result2 = reverseText2('Hola Mundo');

console.log(result2);
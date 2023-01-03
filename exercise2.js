//* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, ejemplo. miFuncion("Hola Mundo", 4) devolverá "Hola"


function cutText(text, numCaracter) {
    return text.substr(0, numCaracter)
}


console.log( cutText('Hello world', 5));
  
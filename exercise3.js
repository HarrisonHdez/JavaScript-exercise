//* Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, ejemplo. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function separateText(text, separator) {
    return text.split(separator);
}

console.log( separateText('hola que tal', ' ') );
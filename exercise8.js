//* Programa una función que elimine cierto patrón de caracteres de un texto dado, ejemplo. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//* new RegExp(pattern[, flags])
//? g: Realiza todas las sustituciones posibles en el texto.
//? i: Ignora mayúsculas y minúsculas al realizar la búsqueda.
//? m: Permite la búsqueda en varias líneas.

function removePattern(text, pattern) {
    return text.replace( new RegExp(pattern, "g"), '');
}

const result = removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

console.log( result );
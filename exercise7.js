//* Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), ejemplo. mifuncion("Salas") devolverá true.

function palindromo(text) {
    let invert = text.split('').reverse().join('');

    if( invert === text ) {
        return true;
    } else {
        return false
    }
    
}

const result = palindromo('salass')

console.log( result );
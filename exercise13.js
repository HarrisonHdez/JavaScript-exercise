//* Programa una función que determine si un número es par o impar, ejemplo. miFuncion(29) devolverá Impar.

const parImpar = (number) => {
        if( number % 2 === 0 ) {
            return 'ES PAR';
        } else {
            return 'ES IMPAR'
        }
}

const result = parImpar(29);
console.log( result );
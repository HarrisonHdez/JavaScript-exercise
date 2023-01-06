//* Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const isPrime = (number) => {
    if( number < 2 ) return false;
    for( let i = 2; i < number; i++ ) {
        if ( number % i === 0) return false;
    }
    return true;
}
const result = isPrime(7);
console.log( result );
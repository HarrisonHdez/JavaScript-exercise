//* Programa una función en javaScript que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), ejemplo. miFuncion(5) devolverá 120.

//? La función factorial es una fórmula matemática representada por el signo de exclamación “!”. En la fórmula Factorial se deben multiplicar todos los números enteros y positivos que hay entre el número que aparece en la fórmula y el número 1.
//! 1*2*3*3*5 = 120

//! 1! = 1 * 1 = 1
//! 3! = 1 * 2 * 3 = 6
//! 10! = 1 * 2 * 3 … 8 * 9 * 10 = 3.628.800

//! 0! = 0 x 0 = 1

function miFuncion(number) {
    let resultado = 1;
    for (let i = 1; i <= number; i++) {
      resultado *= i;
    }
    return resultado;
}

const result = miFuncion(7);

console.log( result );
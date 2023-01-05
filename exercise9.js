//* Programa una función que obtenga un numero aleatorio entre 501 y 600.
//* Programa una función que obtenga un numero aleatorio entre 10 y 110.
//? Esta función utiliza la función Math.random(), que devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive). Luego se multiplica ese número por (600 - 501 + 1), lo que da un rango de 100 valores posibles. Finalmente, se utiliza la función Math.floor()para redondear hacia abajo y se suma 501 para ajustar el rango a 501 a 600.


// function getRandomNumber() {
//     return Math.floor(Math.random() * (501 - 600 + 1) + 10);
// }
// const result = getRandomNumber();
// console.log( result );

// function getRandomNumber() {
//     return Math.floor(Math.random() * (110 - 10 + 1) + 10);
// }

// const result2 = getRandomNumber();
// console.log( result2 );

function getRandomNumber() {
    return Math.floor((Math.random() * 100 + 1000));
}

const result2 = getRandomNumber();
console.log( result2 );
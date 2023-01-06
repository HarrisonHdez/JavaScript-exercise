//* Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, ejemplo. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

//* Obtener la fecha actual y el año actual
//* Obtener el año de la fecha dada
//* Restar el año de la fecha dada al año actual

const yearsSince = (date) => {
    
    const fechaActual = new Date().getFullYear();

    const fechaDada = date.getFullYear();

    return fechaActual - fechaDada;
}
const result = yearsSince(new Date(1984,4,23));
console.log( result );





















// function yearsSince(date) {
//     // Obtener la fecha actual y el año actual
//     const currentDate = new Date().getFullYear();
//     // Obtener el año de la fecha dada
//     const givenYear = date.getFullYear();
  
//     // Restar el año de la fecha dada al año actual
//     return currentDate - givenYear;
// }

// const result = yearsSince(new Date(1995, 4, 23)); // debería mostrar 35 años
// console.log( result );
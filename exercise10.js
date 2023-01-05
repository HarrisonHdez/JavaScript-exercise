//* Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), ejemplo. miFuncion(2002) devolverá true.


function isCapicua(number) {
    
    let numberStr = number.toString();
    let numInvert = numberStr.split('').reverse().join('');

    return numInvert === numberStr;
}
const result = isCapicua(2002);
console.log( result );
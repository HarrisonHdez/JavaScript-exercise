//* Programa una función que cuente el número de caracteres de una cadena de texto, Ejemplo. miFuncion("Hola Mundo") devolverá 10.

function myFuncion(text) {

    if ( typeof text === 'string') {
        let result = text.length
        console.log( result );
    } else {
        console.log('ingresa un string');
    }
    
}

myFuncion('Hello world')

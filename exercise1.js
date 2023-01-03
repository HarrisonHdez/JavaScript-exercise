//* Programa una función que cuente el número de caracteres de una cadena de texto, Ejemplo. miFuncion("Hola Mundo") devolverá 10.

function myFuncion(text) {

    if ( typeof text === 'string') {
        let result = text.length
        console.log( result );
    } else {
        console.log('ingresa un string');
    }
    
}


myFuncion('Hello World')

const myFuncion2 = (text) => {
    if ( typeof text === 'string') {
        let result = text.length;
        return result
    } else {
        return 'Ingresa un estring'
    }
}

console.log(myFuncion2('Hello world'));



const myFuncion3 = (text = '') => {
    if(!text) {
       return  'No ingresaste ninguna cadena'
    } else {
        return `El texto ${text} tiene ${text.length} caracter`
    }
}

console.log(myFuncion3('Hello world')); 
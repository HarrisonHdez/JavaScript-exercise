//* Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
//* ejemplo: 
//? 'El perro corría y ladraba en el parque mientras su dueño lo llamaba. El dueño del perro,,,,, un hombre de unos cincuenta años, vestía una camisa azul y pantalones marrones. El hombre y el perro estaban ambos muy contentos y felices en el parque, corriendo y jugando juntos. El perro saltaba y movía la cola con entusiasmo mientras el hombre lo acariciaba y le daba palmaditas en la cabeza', 'perro' /* devuelve 4 */


function countWord(text, word) {

    let textClean = text.toLowerCase().replace(/[!!.,-]/gi, '') ;
    let wordClean = word.toLowerCase()

    const words = textClean.split(' ');

    const count = words.reduce((acc, curr ) => {
        if( curr === wordClean) {
            acc++;
        }
        return acc
    })
    return count
}

const result = countWord(' El perro corría y ladraba en el parque mientras su dueño lo llamaba. El dueño del perro,,,,, un hombre de unos cincuenta años, vestía una camisa azul y pantalones marrones. El hombre y el perro estaban ambos muy perro perro contentos y felices en el parque, corriendo y jugando juntos. El perro saltaba y movía la cola con entusiasmo mientras el hombre lo acariciaba y le daba palmaditas en la cabeza', 'perro')

console.log( result );



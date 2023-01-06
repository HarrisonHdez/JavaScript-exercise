//* Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, ejemplo. miFuncion(1000, 20) devolverá 800.


const descuentoCompra = (monto, descuento) => {
    
    return monto - (monto * descuento / 100); 
}

const result = descuentoCompra(1000, 20);
console.log( result );
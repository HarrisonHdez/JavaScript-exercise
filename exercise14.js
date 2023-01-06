//* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, ejemplo. miFuncion(0,"C") devolverá 32°F.

//* alt + 0176 = °
//* Grado Celsius a Grado Fahrenheit
//* Fórmula	
//* 0 °C × 9/5) + 32 = 32 °F

//* Fórmula
//* Grado Fahrenheit a Celsius Grado 
//* (0 °F − 32) × 5/9 = -17.78 °C



const convertTemperature = (temperature, unit) => {
    
    let units = unit.toUpperCase();

    if( units === "C") {
        return temperature * 9/5 + 32 + "°F"
    } else if (units === "F") {
        return temperature - 32 * 5/9 + "°C"
    } else {
        return "Invalid unit"
    }
}   

const result = convertTemperature( 0, "F" )
console.log( result );

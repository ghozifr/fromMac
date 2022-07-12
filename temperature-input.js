
const celsiusToFahrenheit = (celsius) => {
    return celsius * (9/5) + 32;
}

const celsiusInput = process.argv[2] // Get 3rd input from tha argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput)

console.log(`${celsiusInput} degree Celsius = ${fahrenheitValue} degree Fahrenheit.`)
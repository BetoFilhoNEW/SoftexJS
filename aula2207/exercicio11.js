//Exercício 11: Converter Celsius para Fahrenheit
//Descrição: Crie uma função celsiusParaFahrenheit que receba uma temperatura em graus Celsius e retorne a temperatura convertida para Fahrenheit dada a fórmula : celsius = * 9/5 + 32;

let celsius = 20

function celsiusParaFahrenheit() {
    return  ` A temperatua em Farenheit é: ${(9/5 * celsius) + 32} `
}

console.log(celsiusParaFahrenheit());
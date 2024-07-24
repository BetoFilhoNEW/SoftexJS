//Exercício 10: Verificar Par ou Ímpar
//Descrição: Crie uma função parOuImpar que receba um número como parâmetro e retorne "par" se o número for par, e "ímpar" se o número for ímpar.

let num1 = 2;

function parOuImpar () {
    if (num1 % 2 == 0) {
        return "par"
} else {
    return "ímpar"
}
}
console.log(parOuImpar());


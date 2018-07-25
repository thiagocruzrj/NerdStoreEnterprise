//Armazendo uma função em uma variavel
const imprimirSoma = function (a, b) { //função anonima
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 6))

//Retorno implícito, versão mais reduzida
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')
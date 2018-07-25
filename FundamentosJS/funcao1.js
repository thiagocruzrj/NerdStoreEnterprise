//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//soma de inteiro com undefined = NaN
imprimirSoma(4,5,6,7,8,9)
imprimirSoma()

//Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
const soma = function (x, y) {
    return x + y
}

const imprimirResultar = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultar(3, 4)
imprimirResultar(3, 4, soma)
imprimirResultar(3, 4, function(x, y){
    return x - y
})
imprimirResultar(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()
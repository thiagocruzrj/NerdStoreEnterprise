function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i] //todos os paramentros passado na função e somar pelo exemplo
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Teste"))
console.log(soma(' eu ', ' concateno', ' por soma'))
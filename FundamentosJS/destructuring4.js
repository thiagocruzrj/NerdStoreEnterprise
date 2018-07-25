function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //criando um array para mudar a posição de min para max e max para mim
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredondar para baixo "sail" para cima
}

console.log(rand([50, 40])) //entre 50 e 40
console.log(rand([992])) // entre 992 e 1000
console.log(rand([,10])) // minimo como 0 max como 10
console.log(rand([])) //padrão 0 e 100
//console.log(rand()) //erro por desestruturação de dados null e undefined
function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`O valor encontrado foi ${opcao}.`)
} while (opcao != -1)

console.log('Fim do loop')
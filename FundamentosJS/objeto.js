const prod1 = {}//objeto é uma colação de chave/valor
prod1.nome = 'Celular ultra mega'//criação dinamica nome(chave), valor('Celular ultra mega')
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

'{"nome": "camisa polo", "preco": 79.90}' //JSON formato textual de objeto

console.log(prod2)
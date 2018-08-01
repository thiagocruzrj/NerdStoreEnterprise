// Object.preventExtensions - não conseguir adicionar novos objetos, mas pode ser modificado ou excluido

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - Não consegue adicionar nem excluir, mas consegue modificar
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Test'
pessoa.nome = 'Thiago'
delete pessoa.idade

console.log(pessoa)

// Object.freeze = selado + valores constantes
const carro = { modelo: 'ranger', ano: 2015}
Object.freeze(pessoa)

delete carro.modelo
carro.modelo = 'f40'

console.log(carro)
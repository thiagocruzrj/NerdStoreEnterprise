// pessoa -> 123 -> {...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) //congelando o objeto pessoa, assim não é possível mudar o objeto
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome) //Sem erro, mas o objeto continua como ele era na atribuição antes do freeze

const pessoaConstante = Object.freeze({nome: 'Thiago'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
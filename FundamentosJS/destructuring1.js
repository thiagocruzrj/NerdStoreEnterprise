//operador de destruturação, extrair de dentro de um objeto ou array
//ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    enderco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa // tira de dentro do objeto o atributo nome e idade objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //maneira não amarrada
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa //se não foi definido undefined, se não vier nada no bemHumorada aparece true, chaves não existem
console.log(sobrenome, bemHumorada)

const {enderco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//const {escola: {ano, turno}} = pessoa
//console.log(ano, turno)
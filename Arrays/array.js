// Array é um objeto, organizado por indices
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'

console.log(aprovados[3])
aprovados.push('Abia') //apropriado para adicionar um novo elemento no array apartir da ultima posiçao
console.log(aprovados.length) // verificar o tamanho do array
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordenar o array por ordem crescente
console.log(aprovados)

delete aprovados[1] // Undefined no indice 1
console.log(aprovados) 

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //adicionar elementes em um indice especifico, remover itens do array ou remover e adicionar itens
console.log(aprovados)
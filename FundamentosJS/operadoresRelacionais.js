//sempre se lembre que JS é uma linguagem fracamente tipada
//relacional sempre verdadeiro ou falso
console.log('01', '1' == 1) // comparação de igualdade, operador binário, comparação de valor e não tipo
console.log('02', '2' === 2) // estritamente pelo tipo da variavel 
console.log('03)', '3' != 3) // estritamente pelo tipo da variavel

console.log('4)', 3> 2)

const d1 = new Date(0) // marco zero
const d2 = new Date(0)

console.log('05)', d1 === d2) //comparaçao de tipo da variavel
console.log('06)', d1 == d2)
console.log('07', d1.getTime() == d2.getTime()) //comparação pelo valor 
console.log('08', d1.getTime() === d2.getTime()) // comparação pelo valor da variavel
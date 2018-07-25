const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[500]) //vai gerar undefined quando não compõe o array

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//mostra e retira o ultimo valor
delete valores[0]
console.log(valores) //retira o primeiro atributo <empty item>
console.log(typeof valores)
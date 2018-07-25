const escola = "Cod3r"

console.log(escola.charAt(4)) //mostra o valor na posição 4 que é o 'r'
console.log(escola.charAt(5)) //não mostra informação
console.log(escola.charCodeAt(3)) //valor na tabela unicode ou asci
console.log(escola.indexOf(3)) //mostrar se existe o item pelo valor
console.log(escola.substring(1)) //do indice 1 ao final
console.log(escola.substring(1,3)) //indo do indice 1 ao 3
console.log('Escola '.concat(escola).concat('!')) //concatena os literais junto a variavel
console.log('Escola '+ escola + '!')// no conceito de string concatena com o '+' também
console.log(escola.replace(3, 'e')) //mudar o valor 3 pela letra 'e'
console.log(escola.replace(/\d/, 'e')) //mudar todos os numeros pela letra 'e' com REGEX
console.log('Ana,Maria,Pedro'.split(','))//gera um array separado por ','
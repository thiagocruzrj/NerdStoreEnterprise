let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)//mostra o valor valido se é verdadeiro é falso

console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos ...')
console.log(!!0)
console.log(!!'')//se tiver vazia é falso preenchida verdadeiro
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar')
console.log(!!('' || null || 0 || 'epa'))

let nome = 'Thiago'
console.log(nome || 'Desconhecido')
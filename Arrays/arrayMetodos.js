const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa retirado da lista, remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na ultima posiçao
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona e remove elementos
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // retorna um novo array gerado apartir do indice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // seria 1, 2, 3
console.log(algunsPilotos2)
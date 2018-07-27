//comum
let dobro = function (a) {
    return 2 * a
}
//arrow
dobro = (a) => {
    return 2 * a
}
// somente com um paramentro, mais reduzida e o retorno fica implicito 
dobro = a => 2 * a 
console.log(dobro(Math.PI))

//exemplo 2
let ola = function () {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possuí um parametro
console.log(ola())
const ferrari = {
    modelo: 'f40',
    velocidadeMaxima: 324
}
const volvo = {
    modelo: 'V40',
    velocidadeMaxima: 200
}

console.log(ferrari.__proto__) //se não encontrar vai buscar em toda a cadeia de protitipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //mais alto nivel na hierarquia ? não

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
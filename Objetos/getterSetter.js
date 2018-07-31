const sequencia = {
    _valor: 1, //conveção que é uma variavel pretendida a ser usada somente aqui
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor //validacao
        } 
    }
}

console.log(sequencia.valor, sequencia.valor) //ler o valor 1 e depois o incremento
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // DON'T DO THIS

const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B', attr3: 0}
const filho = {__proto__: pai, attr3: 'C'} // sombreamento o attr3 do pai
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima){
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status() { // mostrar no console o valor
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324 // shadowing, sobre escrever a variavel acima(mais abrangente)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super para chamar o metodo do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro) // relação estabelecida de prototipo entre carro e ferrari 
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) // validação de limite da velocidade max 200 se por mais continuará no máximo
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
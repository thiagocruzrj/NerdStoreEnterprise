// Classe é uma forma diferente de escrever uma função, sintaxe diferente
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // maneira de demostrar a relaçao de prototipo com classe
    constructor(sobrenome, profissao = "Professor"){
        super(sobrenome) // forma de chamar a super classe
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
Array.prototype.filter2 = function(callbalck, thisArg) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callbalck(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "IpadPro", preco: 4199, fragil: true},
    { nome: "Copo de vidro", preco: 12.49, fragil: true},
    { nome: "Copo de plastico", preco: 19.99, fragil: false}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))
const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "IpadPro", preco: 4199, fragil: true},
    { nome: "Copo de vidro", preco: 12.49, fragil: true},
    { nome: "Copo de plastico", preco: 19.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return (p.fragil == true && p.preco > 2400)
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
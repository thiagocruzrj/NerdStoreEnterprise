function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //OU
    const comprarTV50 = trabalho1 && trabalho2 // E
    const comprarTV32 = trabalho1 != trabalho2 //converter para boolean
    const manterSaudavel = !comprarSorvete //operadur unario

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} //colocando assim a chave da constante vai ser o escrito e o restultado será o valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
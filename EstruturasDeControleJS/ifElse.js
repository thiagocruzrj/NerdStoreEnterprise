const imprimirResultato = function(nota) {
    if (nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultato(10)
imprimirResultato(4)
imprimirResultato('Epa!')
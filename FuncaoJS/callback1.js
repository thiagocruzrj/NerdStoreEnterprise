const fabricantes  = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome} `)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))

// quando encontra um novo elemento ele dispara o outro, para cada elemento ele chama o indice
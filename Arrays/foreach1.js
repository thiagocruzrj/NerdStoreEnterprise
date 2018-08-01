const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){ //por cada elemente que foi percorrido no array passa o indice e o elemento
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
}) 

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
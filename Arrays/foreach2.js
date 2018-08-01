Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){ //percorrendo os indices
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ //por cada elemente que foi percorrido no array passa o indice e o elemento
    console.log(`${indice + 1}) ${nome}`)
}) 
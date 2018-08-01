console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Toda função tem .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) //ao contrario

Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola.coder'.reverse())//não vai alterar o texto do console e sim da ultima function
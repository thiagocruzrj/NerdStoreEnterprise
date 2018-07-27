let comparaComThis = function (param) {
    console.log( this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// função normal aponta para o scopo global, função arrow não aponta para o scopo global
// arrow function vai continuar apontando para o scopo da função e não global mesmo se utilizar o bind
// module.export sempre apontará para o contexto global

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.export)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
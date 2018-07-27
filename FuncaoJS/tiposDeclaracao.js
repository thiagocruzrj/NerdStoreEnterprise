// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

// named function expression
const multi = function mult(x, y){
    return x * y
}

//js carrega todas as funções antes de interpretar os codigos menos em function expression nem a named function expression
// chame a função após a declaração da função
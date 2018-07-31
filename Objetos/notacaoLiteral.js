const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //mudar o nome
const obj2 = { a, b, c } //declarar o valor 
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // atribuindo o valor como informação do nome
console.log(obj3) 

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1 : function (){
        //function expression
    },
    funcao2() {
        // forma reduzida para definir função
    }
}

console.log(obj5)
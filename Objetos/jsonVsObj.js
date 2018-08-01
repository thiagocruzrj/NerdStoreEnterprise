// Transformando em JSON, que é um formato de dados, não leva função, nada especifico 
// Muito usado em comunicação de sistemas

const obj = { a: 1, b:2, c:3, soma(){return a + b + c }}
console.log(JSON.stringify(obj)) //obj to json

console.log(JSON.parse('{"a": 1, "b": 2, "c":3}')) //json to obj
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
let num1 = 1
let num2 = 2
num1++ // pos fixada
console.log(num1)
--num1 //precedencia maior, ex: multiplicação tem prioridade sobre soma
console.log(num1)

console.log(++num1 === num2--) //verdadeiro pois o ++ foi antes da comparação e o decremento foi dps
console.log(num)
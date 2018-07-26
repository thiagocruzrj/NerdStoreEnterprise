const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) {
        break // não age no bloco if e sim no bloco for o while mais próximo para o desvio do fluxo
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue // pula no caso o indice 5 
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for(b in nums){
        if(a == 2 && b ==3) break externo //agindo no laço mais externo com o rotulo externo
        console.log(`Par = ${a}, ${b}`) //codigo não estruturado, não utilize, não elegante 
    }
}
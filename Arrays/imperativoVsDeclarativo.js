const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativa - menos reuso (seria uma forma para ensinar a algum os passos para serem executados para nada ficar faltando, passo a passo, como tem que ser feito)
let total1 = 0 // acumular para dps calcular a média
for (var i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativa - se importa mais com o que que tem que ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
// metodos acima de reuso
const total2 = alunos.map(getNota).reduce(soma) // reduce tem a ideia de reduzi e agregar valores um só
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1 (sample)
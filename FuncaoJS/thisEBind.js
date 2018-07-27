const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //sem o this não consigo acessar a saudacao
    }
}

pessoa.falar()
const falar1 = pessoa.falar
falar1() //conflito entre paradgmas oo e funcional
const falar = pessoa.falar.bind(pessoa) //o bind retorna o this para mostrar a saudacao
falar() 
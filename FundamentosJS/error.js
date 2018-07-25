//inicio de tratamento de erros
function tratarErrorELançar (erro) {
    throw new Error('Error teste') //usado para demonstração de mensagem ou por exemplo criar um ajax e enviar para notificação do erro acontecido
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprirmirNumeroGritado(obj) {
    try { // bloco de codigo que poderá gerar um error
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { // gerando um excessão cai no catch, mostrar uma msg ao usuario ou tratar o erro
        tratarErrorELançar(e)
    } finally { //ocorrendo ou não irá ser chamado
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprirmirNumeroGritado(obj)
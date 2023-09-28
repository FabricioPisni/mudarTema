let botao = document.querySelector('#botao')
let container = document.querySelector('#container')
let titulo = document.querySelector('#titulo')
let body = document.querySelector('body')

function temaEscuro() {
    botao.removeAttribute('id')
    botao.setAttribute('class','botaoEscuro')
    container.removeAttribute('id')
    container.setAttribute('class','containerEscuro')
    titulo.removeAttribute('id')
    titulo.setAttribute('class','tituloEscuro')
    body.setAttribute('class','temaEscuro')
}

function temaBranco() {
    botao.removeAttribute('class')
    botao.setAttribute('id','botao')
    container.removeAttribute('class')
    container.setAttribute('id','container')
    titulo.removeAttribute('class')
    titulo.setAttribute('id','titulo')
    body.removeAttribute('class','temaEscuro')
}

let i = 0

function mudarTema() {

    if(i%2 == 0){
        temaEscuro()
    }else{
        temaBranco()
    }

    i++

}
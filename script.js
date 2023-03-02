let contador = 0
const imagemPerfil = document.getElementById("imagem")

const setaDireita = document.getElementById("seta-direita")
const setaEsquerda = document.getElementById("seta-esquerda")
const nomeParticipante = document.getElementById("nome-participante")

setaDireita.addEventListener("click" , MudarImagemDireita)
setaEsquerda.addEventListener("click" , MudarImagemEsquerda)


function MudarImagemDireita() {
    if(contador == 0){
        imagemPerfil.src = "./galo.jpg"
        nomeParticipante.innerHTML = "Galo Doido"
    }

    if(contador == 1){
        imagemPerfil.src = "./atletico.jpg"
        nomeParticipante.innerHTML = "Atletico"

    }

    if(contador == 2){
        imagemPerfil.src = "./diego.enc"
        nomeParticipante.innerHTML = "Diego Alves Teixeira"
    }
    contador++

    if(contador == 3){
        contador = 0
    }
}

function MudarImagemEsquerda() {
    if(contador == 0){
        imagemPerfil.src = "./diego.enc"
        nomeParticipante.innerHTML = "Diego Alves Teixeira"
    }

    if(contador == 1){
        imagemPerfil.src = "./atletico.jpg"
        nomeParticipante.innerHTML = "Atletico"
    }

    if(contador == 2){
        imagemPerfil.src = "./galo.jpg"
        nomeParticipante.innerHTML = "Galo Doido"
    }
    contador++

    if(contador == 3){
        contador = 0
    }
}
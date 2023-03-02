const anterior = document.getElementById("anterior")
const proximo = document.getElementById("proximo")
const  botaoEditar = document.getElementById("botao-editar")
let texto = ""
let contador = 0
const imagemPerfil = document.getElementById("imagem-perfil")

anterior.addEventListener("click", ImagemAnterior)
proximo.addEventListener("click", ImagemProximo)
botaoEditar.addEventListener("click", BotaoEditar)

function ImagemAnterior() {
    if(contador == 0){
        imagemPerfil.src = "./diego.enc"
    }

    if(contador == 1){
        imagemPerfil.src = "./atletico.jpg"
    }

    if(contador == 2){
        imagemPerfil.src = "./galo.jpg"
    }
    contador++

    if(contador == 3){
        contador = 0
    }
}

function ImagemProximo() {
    if(contador == 0){
        imagemPerfil.src = "./galo.jpg"
    }

    if(contador == 1){
        imagemPerfil.src = "./atletico.jpg"

    }

    if(contador == 2){
        imagemPerfil.src = "./diego.enc"
    }
    contador++

    if(contador == 3){
        contador = 0
    }
}

function BotaoEditar() {
    texto = prompt("Informe o texto que deseja substituir")
}
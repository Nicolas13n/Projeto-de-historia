const hamburguer = document.querySelector(".menuHamburguer");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const videoDeJogo = document.querySelector(".videoDeJogo");
hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
    
    navList.classList.toggle("active");
    if (nav.classList.contains("active")) {
        hamburguer.querySelector('.menuHamburguer img').src = "assets/image/close.png";
        videoDeJogo.style.display = "none";
        hamburguer.style.position = "fixed"; // Esconde o vídeo quando o menu está aberto
        hamburguer.style.right = "0"; // Garante que o menu hamburguer fique fixo no canto direito
    } else {
        hamburguer.querySelector('.menuHamburguer img').src = "assets/image/burger-bar.png";
        videoDeJogo.style.display = "block"; // Mostra o vídeo quando o menu está fechado
        hamburguer.style.position = ""; // Restaura a posição original do menu hamburguer
        hamburguer.style.right = ""; // Restaura a posição original do menu hamburguer
    }
});


const btn_avancar = document.querySelector(".next");
const btn_voltar = document.querySelector(".prev");
const cartoes = document.querySelectorAll(".slider-item");
let cardAtual = 0;
console.log(cartoes);

btn_avancar.addEventListener("click", function () {

    if (cardAtual === cartoes.length - 1) {
        return;
    }
    EsconderCartaoSelecionado();

    cardAtual++;
    MostrarCartao(cardAtual);

});

btn_voltar.addEventListener("click", function () {
    if (cardAtual === 0) {
        return;
    }
    console.log(cardAtual)
    console.log(cardAtual === cartoes.length - 1)

    EsconderCartaoSelecionado();

    cardAtual--
    MostrarCartao(cardAtual);
});

function MostrarCartao() {
    cartoes[cardAtual].classList.add("active");
}

function EsconderCartaoSelecionado() {
    const CartaoSelecionado = document.querySelector(".slider-item.active");
    CartaoSelecionado.classList.remove("active");
}
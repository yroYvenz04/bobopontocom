const botao = document.getElementById("start");
const click = document.getElementById("clickSound");
const music = document.getElementById("music");

const menu = document.getElementById("menu");
const intro = document.getElementById("intro");

const loading = document.getElementById("telacarregando");
const progresso = document.getElementById("progresso");

const telaFinal = document.getElementById("telaFinal");
const imagem = document.getElementById("imagem");
const continuar = document.getElementById("continuar");
const continueSound = document.getElementById("continueSound");

botao.addEventListener("click", () => {

    click.play();

    music.volume = 0.15;
    music.play();

    menu.style.display = "none";

    intro.classList.add("ativo");

    setTimeout(() => {

        document.querySelector("#intro p").classList.add("mostrar");

    }, 3000);

});

const texto = document.getElementById("texto");

const mensagens = [

    "Olá.",

    "Tenho algo para te mostrar.",

    "Espero que goste.",

];

let indice = 0;

setTimeout(() => {

    texto.classList.add("mostrar");

}, 2000);

intro.addEventListener("click", () => {
    if (indice >= mensagens.length - 1) {

        texto.classList.remove("mostrar");

        setTimeout(() => {

            intro.classList.remove("ativo");

            loading.classList.add("ativo");

            iniciarLoading();

        }, 800);

        return;
    }

    texto.classList.remove("mostrar");

    setTimeout(() => {

        indice++;

        texto.textContent = mensagens[indice];

        texto.classList.add("mostrar");

    }, 800);

});

function iniciarLoading() {

    let porcentagem = 0;

    const carregar = setInterval(() => {

        porcentagem++;

        progresso.style.width = porcentagem + "%";

        if (porcentagem >= 100) {

            clearInterval(carregar);

            loading.classList.remove("ativo");

            telaFinal.classList.add("ativo");

        }

    }, 40);

}

continuar.addEventListener("click", () => {

    continueSound.play();

    telaFinal.classList.remove("ativo");

    imagem.classList.add("ativo");

});
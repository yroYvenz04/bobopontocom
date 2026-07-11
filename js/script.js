const botao = document.getElementById("start");
const click = document.getElementById("clickSound");
const music = document.getElementById("music");

const menu = document.getElementById("menu");
const intro = document.getElementById("intro");

botao.addEventListener("click", () => {

    click.play();

    music.volume = 0.15;
    music.play();

    menu.style.display = "none";

    intro.classList.add("ativo");

    setTimeout(() => {

        document.querySelector("#intro p").classList.add("mostrar");

    },2000);

});
const botao = document.getElementById("start");
const click = document.getElementById("clickSound");
const music = document.getElementById("music");

const fade = document.getElementById("fade");
const menu = document.getElementById("menu");
const intro = document.getElementById("intro");

botao.addEventListener("click", () => {

    click.play();

    music.volume = 0.15;
    music.play();

    fade.classList.add("fade");

});

fade.addEventListener("transitionend", () => {

    menu.style.display = "none";

    intro.style.display = "flex";

    setTimeout(() => {
        document.querySelector("#intro p").classList.add("mostrar");
    }, 400);

});
const janela = document.getElementById("janela");
const texto = document.getElementById("lblJanela");

function openWindow() {
    janela.src = "janelaaberta.png";
    texto.innerHTML = "Janela Aberta";
}

function brokeWindow() {
    janela.src = "janelaquebrada.png";
    texto.innerHTML = "Janela Quebrada";
}

function closeWindow() {
    janela.src = "janelafechada.png";
    texto.innerHTML = "Janela Fechada";
}
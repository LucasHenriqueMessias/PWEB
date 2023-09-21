var jogadortext;
var maquinatext;
var valorJogador = parseInt(prompt(`Escolha o que vai jogar:\n1 - Pedra\n2 - Papel\n3 - Tesoura`));
var randomizerMaquina = Math.floor(Math.random() * 3) + 1;
if (valorJogador == 1) {
    jogadortext = "Pedra";
} else if (valorJogador == 2) {
    jogadortext = "Papel";
} else if (valorJogador == 3) {
    jogadortext = "tesoura"
}
if (randomizerMaquina == 1) {
    maquinatext = "Pedra";
} else if (randomizerMaquina == 2) {
    maquinatext = "Papel";
} else if (randomizerMaquina == 3) {
    maquinatext = "Tesoura"
}


if (valorJogador == randomizerMaquina) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Empate! Ambos jogaram o mesmo`);
}
else if (valorJogador == 2 && randomizerMaquina == 1) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Venceu! Papel ganha da Pedra, selecionado pela máquina`);
} else if (valorJogador == 2 && randomizerMaquina == 3) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Perdeu! Papel perde pra Tesoura, selecionado pela máquina`);
} else if (valorJogador == 1 && randomizerMaquina == 2) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Perdeu! Pedra perde pro Papel, selecionado pela máquina`);
} else if (valorJogador == 1 && randomizerMaquina == 3) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Venceu! Pedra ganha da Tesoura, selecionado pela máquina`);
} else if (valorJogador == 3 && randomizerMaquina == 1) {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Perdeu! Tesoura perde pra Pedra, selecionado pela máquina`);
} else {
    alert(`Jogador jogou: ${jogadortext}\n
    Máquina jogou: ${maquinatext}\n
    Venceu! Tesoura ganha do Papel, selecionado pela máquina`);
}

var val1 = parseFloat(prompt("digite o primeiro valor"));
var val2 = parseFloat(prompt("digite o segundo valor"));
var soma = val1 + val2;
var sub1to2 = val1 - val2;
var sub2to1 = val2 - val1;
var produto = val1 * val2;
var divisao = val1 / val2;
var resto = val1 % val2;


alert(`soma do valor: ${soma} \n
subtração do primeiro com o segundo: ${sub1to2} \n
subtração do segundo com o primeiro: ${sub2to1} \n
resultado do produto: ${produto} \n
resultado da divisão: ${divisao} \n
resto da divisão: ${resto}`)
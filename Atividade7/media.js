var nome = prompt("digite o seu nome");
var media1 = parseFloat(prompt("digite a primeira nota"));
var media2 = parseFloat(prompt("digite a segunda nota"));
var media3 = parseFloat(prompt("digite a terceira nota"));

var calc = (media1 + media2 + media3) / 3

alert(`aluno ${nome} possui ${parseFloat(calc).toFixed(2)} de média`)
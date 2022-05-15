var int1 = parseInt(prompt("Digite um valor inteiro: "));
var int2 = parseInt(prompt("Digite um valor inteiro: "));
var conta = 0;

if (int1 == int2) {
    conta = int1 + int2;
} else {
    conta = int1 * int2;
}

var c = conta;

document.write("O resultado é " + conta);
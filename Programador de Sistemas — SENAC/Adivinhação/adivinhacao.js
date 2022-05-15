// Math.random() é usado para dar um número aleatório.
var numeroPensado = Math.round(Math.random() * 100);
console.log(numeroPensado);

var chute = Number(prompt("Pense e digite um numero de 1 a 100"));

var numeroMaximoChutes = 5;
var tentativas = 1;

while (tentativas < numeroMaximoChutes) {

    console.log(tentativas + "Chute " + chute);

    if (chute == numeroPensado) {
        document.write("Parabéns! Você acertou. O número é " + numeroPensado);
    } else 
        if (tentativas < 5) {
        var chute = Number(prompt("Número errado. Pense e didite um numero de 1 a 100."));
    } else {
        prompt("Número máximo de tentativas usadas. Você errou todas !");
    }

    console.log(numeroPensado);
    console.log(tentativas);

    tentativas++;
}

console.log(tentativas + "Chute " + chute);

/*
Números pares de 1 a 100
Usando o document.write()
*/

function pulaLinha() {
    document.write("<br>");
}

var n1 = 0;

while (n1 >= 1 && n1 <= 100) {
    document.write("O número par escolhido é " + n1)
    pulaLinha();

    n1++;
}
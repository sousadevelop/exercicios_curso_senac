/*
1º passo => Usuario deve digitar um numero inteiro de 0 a 10, se o usuário quiser sair do programa ele deve digitar 99;
2º passo => mostrar o resultado do fatorial;
*/

var int = parseInt(prompt("Informe um número de 0 a 10 ou 99 para sair."));
var fatorial = 1;

while (int != 99) {

    var controle = int;

    if ((int != 0) || (int != 1) && (int <= 10)) {
        while (int > 1) {
            fatorial = fatorial * int;
            int--;
        }

        alert("O fatorial de " + controle + " é " + fatorial);

        int = parseInt(prompt("Informe um número de 0 a 10 ou 99 para sair."));
        fatorial = 1;
    }

}

alert("Obrigado!");
var num = parseInt(prompt("Digite um número de 0 a 10 para ver o fatorial dele. Ou digite 99 para sair do programa."));

while (num != 99) {
    var fatorial = 1;

    var recebe = num;

    if ((num != 0) || (num != 1)) {

        while (num > 1) {
            fatorial = num * fatorial;
            num--;
        }

    }

    alert("O fatorial de " + recebe + " é " + fatorial);

    num = parseInt(prompt("Digite um número de 0 a 10 para ver o fatorial dele. Ou digite 99 para sair do programa."));

}

alert("Obrigado por usar o meu programa !");

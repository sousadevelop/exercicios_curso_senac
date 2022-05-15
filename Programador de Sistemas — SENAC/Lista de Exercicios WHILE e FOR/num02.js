//                          EXERCICIO DE FIBONACCI

var termo = parseInt(prompt("Informe um número do termo da Sequência de Fibonnaci para achar ele."));
var fib = 0;

switch (termo) {
    case 1:
        alert("O " + termo + "º termo da sequência de Fibonnaci é 0.");
        break;
    case 2:
        alert("O " + termo + "º termo da sequência de Fibonnaci é 1.");
        break;
    default:
        var controle = termo;
        var antecessor1 = 0;
        var antecessor2 = 1;

        while (controle > 2) {
            fib = antecessor1 + antecessor2;
            antecessor1 = antecessor2;
            antecessor2 = fib;
            controle--;
        }

    alert("O " + termo + "º termo da sequência de Fibonnaci é " + fib);
}
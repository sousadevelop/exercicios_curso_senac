function parOuImpar(a, b, c) {
    var par = 0;
    var impar = 0;

    if (a % 2 == 0) {
        par++;
    } else {
        impar++;
    }

    if (b % 2 == 0) {
        par++;
    } else {
        impar++;
    }

    if (c % 2 == 0) {
        par++;
    } else {
        impar++;
    }

    document.write("<h3> Quantidade de par(es) " + par + "<h3>");
    document.write("<h3> Quantidade de impar(es) " + impar + "<h3>");
}

function sequenciaDecrescente(a, b, c) {
    if (a < b) {
        auxiliar = b;
        b = a;
        a = auxiliar;
    }
    
    if (a < c) {
        auxiliar = c;
        c = a;
        a = auxiliar;
    }
    
    if (b < c) {
        auxiliar = c;
        c = b;
        b = auxiliar;
    }
    
    document.write("<h2> A ordem decrescente é: " + a + "; " + b + "; " + c + "<h2>");
    document.write("<h3> O maior número é: " + a + "<h3>");
    document.write("<h3> O menor número é: " + c + "<h3>");
}

function sequenciaCrescente(a, b, c) {
    if (a > b) {
        auxiliar = b;
        b = a;
        a = auxiliar;
    }
    
    if (a > c) {
        auxiliar = c;
        c = a;
        a = auxiliar;
    }
    
    if (b > c) {
        auxiliar = c;
        c = b;
        b = auxiliar;
    }
    
    document.write("<h2> A ordem crescente é: " + a + "; " + b + "; " + c + "<h2>");
    document.write("<h3> O menor número é: " + a + "<h3>");
    document.write("<h3> O maior número é: " + c + "<h3>");
}

function troca(a, b, c) {
    if ((a > b) && (a > c)) {
        aux = b;
        b = a;
        a = aux;
    }

    if ((c > a) && (c > b)) {
        aux = b;
        b = c;
        c = aux;
    }

    if (a < c) {
        menor = a;
    } else {
        menor = c;
    }

    document.write("<h2> O maior número fica no meio " + a + "; " + b + "; " + c + "<h2>");
    document.write("<h3> O menor número é: " + menor + "<h3>");
    document.write("<h3> O maior número é: " + b + "<h3>");    
}

//programa principal
var numeroA = (Math.round(Math.random() * 100));
var numeroB = (Math.round(Math.random() * 100));
var numeroC = (Math.round(Math.random() * 100));

document.write("<h2> Os números sorteados são " + numeroA + "; " + numeroB + "; " + numeroC + "<h2>");

alert("Informe uma das opções a seguir.");
alert("1 - Para sequência crescente.");
alert("2 - Para sequência decrescente.");
alert("3 - O maior fica no meio.");

var opcao = parseInt(prompt("Digite a opção aqui "));

if (opcao == 1) {
    sequenciaCrescente(numeroA, numeroB, numeroC);
    parOuImpar(numeroA, numeroB, numeroC);
}

if (opcao == 2) {
    sequenciaDecrescente(numeroA, numeroB, numeroC);
    parOuImpar(numeroA, numeroB, numeroC);
}

if (opcao == 3) {
    troca(numeroA, numeroB, numeroC);
    parOuImpar(numeroA, numeroB, numeroC);
}
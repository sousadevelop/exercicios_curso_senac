var numeroA = Math.round(Math.random() * 100);
var numeroB = Math.round(Math.random() * 100);
var numeroC = Math.round(Math.random() * 100);

document.write("Os números sorteados foram " + numeroA + "; " + numeroB + "; " + numeroC);
document.write("<br>");

var aux = 0;

if (numeroA < numeroB) {
    aux = numeroB;
    numeroB = numeroA;
    numeroA = aux;
}

if (numeroA < numeroC) {
    aux = numeroC;
    numeroC = numeroA;
    numeroA = aux;
}

if (numeroB < numeroC) {
    aux = numeroC;
    numeroC = numeroB;
    numeroB = aux;
}

document.write("Os números em ordem decrescente são: " + numeroA + "; " + numeroB + "; " + numeroC);
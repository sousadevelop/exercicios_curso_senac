/*
Números pares de 1 a 100
Usando o document.write()
*/

function pulaLinha() {
    document.write("<br>");
}

var n1 = 0;

while (n1 <= 100) {
    document.write(n1)
    pulaLinha();

    n1 = n1+2;
}

// Agora o mesmo programa com o For

function pulaLinha() {
    document.write("<br>");
}

var contador = 0;

for(var contador = 0; contador <= 100; contador = contador + 2) {
    document.write(contador);
    document.write("<br>");
}
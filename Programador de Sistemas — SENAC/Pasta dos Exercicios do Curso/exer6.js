var int = 1, soma = 0;

while (int < 101) {
    document.write(int);
    document.write("<br>")
    
    if (int < 101) {
        soma = soma + int;
    }
    
    int++;
}

/*for(int = 1; int < 101; int++) {
    
    var resultado = resultado + int;
}*/


document.write("<br>")
document.write("<h2>" + "A soma de todos os números é " + (soma) + "." + "</h2>");
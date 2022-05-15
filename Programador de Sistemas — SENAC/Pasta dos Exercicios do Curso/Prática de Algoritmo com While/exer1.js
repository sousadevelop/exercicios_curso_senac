var numeros = [];

for(var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Digite um número "));
    numeros.push(num);
    document.write(numeros[i] + ", "); 
}

numeros.sort((a, b) => a - b);

document.write("<br>");
document.write("O maior número é " + numeros[numeros.length - 1]);
document.write("<br>");
document.write("O menor número é " + numeros[0]);
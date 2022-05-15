/*function verifica() {
    var num = document.getElementById("numero").ariaValueMax;
    alert(num);
}*/


var n = parseInt(prompt("Digite um valor de 1 a 10:"));

while ((n <= 0) || (n > 10)) {
    var n = parseInt(prompt("Digite um valor de 1 a 10:"));
}

for(var num = 1; num <= 10; num++) {
    document.write(n + " x " + num + " = " + n * num);
    document.write("<br>");
    
}
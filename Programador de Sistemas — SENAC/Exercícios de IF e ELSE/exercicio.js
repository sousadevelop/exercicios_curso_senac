function comparaNumeros(x, y) {
    if (x == y) {
        w = x + y;
    } else {
        w = x * y;
    }
    return w;
}

var num1 = parseInt(prompt("Digite um valor: "));
var num2 = parseInt(prompt("Digite mais um valor: "));

var num3 = comparaNumeros(num1, num2);

document.write(num3);
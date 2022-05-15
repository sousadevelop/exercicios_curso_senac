var num1 = Number(prompt("Digite um número: "));

if ((num1 % 2 == 0) && (num1 < 0)) {
    document.write("O número " + num1 + " é par e negativo.");
} else if ((num1 % 2 == 0) && (num1 > 0)) {
    document.write("O número " + num1 + " é par e positivo.");
} else if ((num1 % 2 != 0) && (num1 < 0)) {
    document.write("O número " + num1 + " é impar e negativo.");
} else {
    document.write("O número " + num1 + " é impar e positivo.");
}
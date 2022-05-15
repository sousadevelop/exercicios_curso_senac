var nome = prompt("Digite o seu nome: ");
var salario = Number(prompt("Digite o seu salário: "));

var aumento = salario + ((salario * 10) / 100);

document.write("O seu nome salário é " + aumento);
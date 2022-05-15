/*
05. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número 
de filhos. 5 pessoas
A prefeitura deseja saber: 
a)média do salário da população; 
b)média do número de filhos; 
c)maior salário; 
d)percentual de pessoas com salário até R$100,00.
*/

var sal = [];
var filhos = [];
var n;
var percent = 0;

for (n = 0; n < 5; n++) {
    var digSal = parseInt(prompt("Digite o seu salário: "));
    var digFil = parseInt(prompt("Digite a quantidade de filhos que você tem: "));

    sal.push(digSal);
    filhos.push(digFil);

    if (digSal[n] <= 100) {
        percent++;
    }

}

var mediaSal = (sal[0] + sal[1] + sal[2] + sal[3] + sal[4]) / 5;
document.write("A média salarial da população é " + mediaSal + ".");
document.write("<br>");

var mediaFil = (filhos[0] + filhos[1] + filhos[2] + filhos[3] + filhos[4]) / 5;
document.write("A média de filhos da população é " + mediaFil + ".");
document.write("<br>");

//sal.sort((a,b) => a - b);
var salMax = Math.max(...sal);
document.write("O maior salário é " + salMax + ".");
document.write("<br>");

document.write("A quantidade de pessoas com o salário menor do que R$ 100 reais, é " + percent + ".");
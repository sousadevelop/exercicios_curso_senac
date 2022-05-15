var preco = Number(prompt("Preço do produto à vista: "));
var aumento = 0;
var parcelado = parseInt(prompt("Digite o número de parcelas, sabendo que só pode ser 1, ou 3, ou 5 vezes: "));

if (parcelado == 1) {
    document.write("O valor do produto à vista é " + preco);
} else
    if (parcelado == 3) {
        aumento = preco + ((preco*10) / 100);
        document.write("O valor do produto parcelado em 3x com 10% de aumento é " + aumento + ".");
    } else
        if (parcelado == 5) {
            aumento = preco + ((preco*20) / 100);
            document.write("O valor do produto parcelado em 5x com 20% de aumento é " + aumento + ".");
        }
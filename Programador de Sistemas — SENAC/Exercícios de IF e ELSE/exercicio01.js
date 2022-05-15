/* function descontoProduto() {
    var desconto = Number(prompt("Digite o valor do desconto em porcentagem:")) - produto;
    return desconto;
}

function condicaoPagamento(um, dois, tres, quatro) {
    document.write(" o valor com desconto é " + desconto);
}

var produto = 100;

condicaoPagamento("À vista em dinheiro ou cheque ", "À vista no cartão de crédito ", "Em duas vezes, preço normal da etiqueta sem juros", "Em duas vezes, preço normal da etiquetamais juros de 10%");

if (descontoProduto() == 90) {
    document.write("O valor do produto é " + descontoProduto() + " com 10% de desconto.");
} else if (descontoProduto() == 85) {
    document.write("O valor do produto é " + descontoProduto() + " com 15% de desconto.");
} */

function calcularPagamento(total, pagamento) {
    if (pagamento == 1) {
        aPagar = total * 0.9;
        } else 
            if (pagamento == 2) {
                aPagar = total * 0.85;
            } else 
                if (pagamento == 3) {
                    aPagar = total * 1;
                } else {
                    aPagar = total * 1.1;
                }

    return aPagar;
}

var valorTotal = Number(prompt("Informe o valor total da compra: "));

alert("Neste programa você escolherá a sua opção de pagamento.");
alert(" 1 - À vista em dinheiro ou cheque, recebe 10% de desconto.");
alert(" 1 - À vista no cartão de crédito, recebe 15% de desconto.");
alert(" 1 - Em duas vezes, preço normal da etiqueta sem juros.");
alert(" 1 - Em duas vezes, preço normal da etiqueta mais juros de 10%.");

var opcaoPagamento = Number(prompt("Informe a opção desejada: "));

var valorAPagar = calcularPagamento(valorTotal, opcaoPagamento);

document.write("O valor total da compra é " + valorAPagar);
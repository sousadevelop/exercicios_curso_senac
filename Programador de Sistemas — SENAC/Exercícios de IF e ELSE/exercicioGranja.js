var duziaOvo = 3.25;
var unidadeOvo = 0.45;

var solicitacao = parseInt(prompt("Digite o número de ovos vendidos: "));

var duziaOvosVendidos = Math.trunc(solicitacao / 12);
var ovosAvulsosVendidos = solicitacao % 12;

if (solicitacao < 12) {
    document.write("O cliente comprou " + duziaOvosVendidos + " ovos. O preço ficou em R$ " 
    + solicitacao * unidadeOvo);
} else
    if (ovosAvulsosVendidos == 0) {
        document.write("O cliente comprou " + duziaOvosVendidos + " duzia de ovos. O preço ficou em R$ " 
    + duziaOvosVendidos * duziaOvo);
    } else {
        document.write("O cliente comprou " + duziaOvosVendidos + " duzia de ovos e " + ovosAvulsosVendidos + " ovos avulsos. O preço ficou em R$ " + (duziaOvosVendidos * duziaOvo + ovosAvulsosVendidos * unidadeOvo));
    }
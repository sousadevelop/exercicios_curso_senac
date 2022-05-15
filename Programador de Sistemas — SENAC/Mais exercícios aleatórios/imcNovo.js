var peso = Number(prompt("Digite o seu peso: "));
var altura = Number(prompt("Digite a sua altura: "));

var imc = peso / (altura ** 2);

if (imc < 18.5) {
    document.write("Você está abaixo do peso.");
    } else if (imc >= 18.5 || imc <= 24.9) {
        document.write("O seu peso está normal.");
        } else if (imc >= 25 || imc <= 29.9) {
            document.write("Você está com sobrepeso.");
            } else if (imc >= 30 || imc <= 34.9) {
                document.write("Você está com obesidade grau I.");
                } else if (imc >= 35 || imc <= 39.9) {
                    document.write("Você está com obesidade grau II.");
                    } else {
                        document.write("Você está com obesidade grau III ou mórbida.");
                        }

document.write(" O seu IMC é " + imc);
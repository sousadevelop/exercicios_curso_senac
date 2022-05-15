var loginCadastro  = "senac";
var senhaCadastrada = "a1b2c3";

var tentativas = 0;

//usuário tem 03 tentativas para logar;
//alerta para informar boas vindas + nome de login;

for(tentativas = 0; tentativas < 3; tentativas++){
    var loginInformado = prompt("Informe login ");
    var senhaInformada = prompt("Informe senha ");

    if ((loginCadastro == loginInformado) && (senhaCadastrada == senhaInformada)) {
        alert("Bem-vindo ao Sistema do SENAC, " + loginInformado.toUpperCase());
    } else {
        var aviso = alert("O login ou/ e a senha estão incorreto(s). Usuário tem 03 tentativas para logar.");
    }
}

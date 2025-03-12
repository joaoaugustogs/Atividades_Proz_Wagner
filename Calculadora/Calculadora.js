function adicao(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    if (numero2 === 0) {
        return "Erro: Não é possível dividir por zero";
    }
    return numero1 / numero2;
}

function calcular() {
    var numero1 = parseFloat(prompt("Digite seu primeiro número: "));
    var numero2 = parseFloat(prompt("Digite seu segundo número: "));
    var operacao = prompt("Digite sua operação desejada conforme mencionado (adicao, subtracao, multiplicacao, divisao)");

    var resultado;

    switch (operacao) {
        case "adicao":
            resultado = adicao(numero1, numero2);
            break;

        case "subtracao":
            resultado = subtracao(numero1, numero2);
            break;

        case "multiplicacao":
            resultado = multiplicacao(numero1, numero2);
            break;

        case "divisao":
            resultado = divisao(numero1, numero2);
            break;

        default:
            resultado = "Operação inválida. Por favor, escolha uma operação válida.";
            break;
    }

    alert("Resultado: " + resultado);
}

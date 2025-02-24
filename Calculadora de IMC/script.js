function calcularIMC() {
    // Obtém os valores digitados pelo usuário nos campos de entrada
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores são válidos (não vazios, não negativos e não zero)
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        document.getElementById("resultado").classList.add("show"); // Adiciona a classe para exibir a mensagem
        return; // Para a execução da função caso os valores sejam inválidos
    }

    // Calcula o IMC usando a fórmula: peso / (altura * altura)
    let imc = peso / (altura * altura);
    let classificacao = "";

    // Define a classificação com base no valor do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obeso";
    }

    // Obtém o elemento onde o resultado será exibido
    let resultado = document.getElementById("resultado");

    // Insere o IMC calculado e sua classificação no HTML, formatando o número com duas casas decimais
    resultado.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong> <br> Classificação: ${classificacao}`;

    // Adiciona a classe "show" para exibir o resultado na página (provavelmente uma classe de CSS)
    resultado.classList.add("show");
}


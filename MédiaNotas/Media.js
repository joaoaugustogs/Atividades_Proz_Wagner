function calcularMedia() {
    // Informar números das notas
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira notas válidas.");
        return;
    }

    const media = (nota1 + nota2) / 2;

    // Determinar situação do aluno
    let status;
    if (media >= 0 && media <= 4.5) {
        status = "Reprovado";
    } else if (media >= 4.6 && media <= 6.5) {
        status = "Em Recuperação";
    } else {
        status = "Aprovado";
    }

    // Informar situação
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Você está: ${status} <br> Média: ${media.toFixed(2)}`;
}
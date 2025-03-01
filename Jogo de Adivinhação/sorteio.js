let numeroCorreto = Math.floor(Math.random() * 10) + 1;

while (true) {
    let tentativa = prompt("Tente adivinhar um número entre 1 e 10:");

    tentativa = parseInt(tentativa);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        alert("Por favor, insira um número válido entre 1 e 10.");
        continue;
    }

    if (tentativa === numeroCorreto) {
        alert("Você acertou! O número era " + numeroCorreto);
        break;
    } else if (tentativa < numeroCorreto) {
        alert("O número é maior. Tente novamente!");
    } else {
        alert("O número é menor. Tente novamente!");
    }
}
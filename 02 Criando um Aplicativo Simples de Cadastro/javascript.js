function mostrarDados() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;

    document.getElementById("resultado").innerHTML = 
    `Nome: ${nome} <br> Idade: ${idade} anos <br> Cidade: ${cidade}`;
}
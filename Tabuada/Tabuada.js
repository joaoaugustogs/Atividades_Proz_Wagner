function exibirTabuada() {

  const numero = document.getElementById("numero").value;
  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = '';

  if (isNaN(numero) || numero === '') {
      alert("Por favor, informe um número válido.");
  } else {

      const num = parseInt(numero);


      let resultadoHTML = `<h3>Tabuada de ${num}:</h3><ul>`;
      for (let i = 1; i <= 10; i++) {
          resultadoHTML += `<li>${num} x ${i} = ${num * i}</li>`;
      }
      resultadoHTML += '</ul>';
      resultadoDiv.innerHTML = resultadoHTML;
  }
}

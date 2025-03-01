// Importa o módulo readline para ler a entrada do usuário
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário que insira um número
rl.question("Digite um número para ver a tabuada: ", (numero) => {
  // Converte o valor de 'numero' para um inteiro
  let n = parseInt(numero);

  // Verifica se a conversão deu certo
  if (isNaN(n)) {
    console.log("Por favor, insira um número válido.");
  } else {
    // Exibe a tabuada no console
    console.log(`Tabuada de ${n}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${i} x ${n} = ${i * n}`);
    }
  }

  // Fecha a interface readline
  rl.close();
});

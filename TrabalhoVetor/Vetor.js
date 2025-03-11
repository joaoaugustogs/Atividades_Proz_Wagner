// Função para gerar números aleatórios de 1 a 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função para verificar se um número é primo
function ePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Gerar um array com 10 números aleatórios
let numeros = Array.from({ length: 10 }, gerarNumeroAleatorio);
console.log('Array original:', numeros);

// Ordenar em ordem crescente
let crescente = [...numeros].sort((a, b) => a - b);
console.log('Ordenado em ordem crescente:', crescente);

// Ordenar em ordem decrescente
let decrescente = [...numeros].sort((a, b) => b - a);
console.log('Ordenado em ordem decrescente:', decrescente);

// Filtrando números pares, ímpares e primos
let pares = numeros.filter(num => num % 2 === 0);
let impares = numeros.filter(num => num % 2 !== 0);
let primos = numeros.filter(ePrimo);

console.log('Números pares:', pares);
console.log('Números ímpares:', impares);
console.log('Números primos:', primos);

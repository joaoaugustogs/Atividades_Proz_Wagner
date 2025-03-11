const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

let boardState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';  // O jogador começa com 'X'
let gameOver = false;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return null;
}

function render() {
    cells.forEach((cell, index) => {
        cell.textContent = boardState[index];
    });
}

function computerMove() {
    if (gameOver) return;

    const emptyCells = boardState
        .map((value, index) => value === '' ? index : null)
        .filter(index => index !== null);

    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    boardState[randomIndex] = 'O';
    render();
    checkGameStatus();
}

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (gameOver || boardState[index] !== '') return;

    boardState[index] = currentPlayer;
    render();
    checkGameStatus();

    if (!gameOver) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            setTimeout(computerMove, 500);  // Simula o tempo de espera do computador
        }
    }
}

function checkGameStatus() {
    const winner = checkWinner();
    if (winner) {
        alert(`${winner} venceu!`);
        gameOver = true;
    } else if (boardState.every(cell => cell !== '')) {
        alert('Empate!');
        gameOver = true;
    }
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    render();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

render();

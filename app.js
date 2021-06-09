document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.getElementById('result');
    const displayCurrentPlayer = document.getElementById('current-player');
    let currentPlayer = "Vikash";

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            alert("hey u got a error!" + i);
        }
    }
})
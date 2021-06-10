document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.getElementById('result');
    const displayCurrentPlayer = document.getElementById('current-player');
    let currentPlayer = 1;

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            if (squares[i + 7].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = 2;
                } else if (currentPlayer == 2) {
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = 1;
                }
            } else alert("tf you can't do that");
        }
    }
})
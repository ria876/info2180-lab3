window.onload = function(){
  
    let brd = document.getElementById("board");
    let cell = brd.getElementsByTagName("div");
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';

    for(let c = 0; c < 9; c++){
        cell[c].classList.add("square");
        cell[c].addEventListener('click', function() {
            if (gameState[c] === '') {
                gameState[c] = currentPlayer;
                cell[c].classList.add(currentPlayer);
                cell[c].innerHTML = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    
    }
}


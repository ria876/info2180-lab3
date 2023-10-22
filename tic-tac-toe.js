window.onload = function(){
  
    let brd = document.getElementById("board");
    let cell = brd.getElementsByTagName("div");
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let wins = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6] 
    ];
    let gameOver = false;

    // for(let c = 0; c < 9; c++){
    //     cell[c].classList.add("square");
    //     cell[c].addEventListener('click', function() {
    //         if (gameState[c] === '') {
    //             gameState[c] = currentPlayer;
    //             cell[c].classList.add(currentPlayer);
    //             cell[c].innerHTML = currentPlayer;
    //             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    //             checkforWin();
    //         }
    //     });
    //     cell[c].addEventListener('mouseover', function() {
    //         cell[c].classList.add('hover');
    //     });
    //     cell[c].addEventListener('mouseout', function() {
    //         cell[c].classList.remove('hover');
    //     });
    // }
    for(let c = 0; c < 9; c++){
        cell[c].classList.add("square");
        let clickHandler = function() {
            if (gameState[c] === '') {
                gameState[c] = currentPlayer;
                cell[c].classList.add(currentPlayer);
                cell[c].innerHTML = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                checkforWin();
            }
        };
        cell[c].addEventListener('click', clickHandler);
        cell[c].addEventListener('mouseover', function() {
            cell[c].classList.add('hover');
        });
        cell[c].addEventListener('mouseout', function() {
            cell[c].classList.remove('hover');
        });
    }
    
    function checkforWin() {
        for (let i = 0; i < 8; i++) {
            let [a, b, c] = wins[i];
            if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                
                let status = document.getElementById('status');
                status.innerHTML = `Congratulations! ${gameState[a]} is the Winner!`;
                status.classList.add('you-won');
                //disableBoard();
                return;
            }
        }
    }

    // function disableBoard() {
    //     for (let i = 0; i < cell.length; i++) {
    //         cell[i].removeEventListener('click', clickHandler);
    //     }
    //     let newGameButton = document.querySelector('.btn');
    //     newGameButton.disabled = true;
    // }


}


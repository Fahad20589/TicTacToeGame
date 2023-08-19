

const gameCells = document.querySelectorAll(".cell");

const restartBtn = document.querySelector(".restartBtn")

const alertBox = document.querySelector(".alertBox")





let currentPlayer = "X";

let nextPlayer = "O";



let playerTurn = currentPlayer;





const startGame = () => {

    gameCells.forEach((cell) => {

        cell.addEventListener('click', handleClick)



    })

}



changePlayerTurn = () => {

    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer

}



const checkWin = () => {

    const winningConditions =

        [

            [0, 1, 2],

            [3, 4, 5],

            [6, 7, 8],

            [0, 3, 6],

            [1, 4, 7],

            [2, 5, 8],

            [0, 4, 8],

            [2, 4, 6]

        ]



    for (let i = 0; i < winningConditions.length; i++) {

        const [pos1, pos2, pos3] = winningConditions[i]

        if (gameCells[pos1].textContent !== '' &&

            gameCells[pos1].textContent === gameCells[pos2].textContent &&

            gameCells[pos2].textContent === gameCells[pos3].textContent) {

            return true

        }

    }

    return false

}



const handleClick = (e) => {

    if (e.target.textContent === "") {

        e.target.textContent = playerTurn;

        if (checkWin()) {

            disableCells();

            //console.log()

            showAlert(`${playerTurn} is a winner`);

        }

        else if (checkTie()) {

            disableCells();

            //console.log("It's a Tie!")

            showAlert("It's a Tie!");

        }

        else {

            changePlayerTurn();

            showAlert(`Turn for player ${playerTurn}`)

        }


    }

}



const checkTie = () => {

    let emptyCellsCount = 0

    gameCells.forEach((cell) => {

        if (cell.textContent === "") {

            emptyCellsCount++

        }



    })



    return emptyCellsCount === 0 && !checkWin()

}



const disableCells = () => {

    gameCells.forEach((cell) => {

        cell.removeEventListener('click', handleClick);

        cell.classList.add("disabled");

    })

}



const restartGame = () => {

    alertBox.style.display = "none"

    gameCells.forEach((cell) => {

        cell.textContent = "";

        cell.classList.remove('disabled')

    })

    startGame();

}





const showAlert = (msg) => {

    alertBox.style.display = "block"

    alertBox.textContent = msg

}



restartBtn.addEventListener("click", restartGame);





//checkWin();



startGame();
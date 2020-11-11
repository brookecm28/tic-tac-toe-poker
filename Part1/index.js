console.log("Im in here")
let counter = 0
let board = [0,0,0,0,0,0,0,0,0]
let table = []
table = document.getElementsByTagName('td')
function play(clickedId) {
    const squarePlayed = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player') 

        if (playerSpan.innerText === "X") {
            if (squarePlayed.innerText === "") {
                playerSpan.innerText = "O"
                squarePlayed.innerText = "X"
                board[clickedId] = "X"
                counter += 1
                console.log(counter)
                console.log(board)
                squarePlayed.style.pointerEvents='none'
                // if (counter >= 9) {
                //     alert("Game Over")
                // }
            }
            console.log(playerSpan)
        } else {
            if (squarePlayed.innerText === "") {
                playerSpan.innerText = "X"
                squarePlayed.innerText = "O"
                board[clickedId] = "O"
                counter += 1
                console.log(counter)
                console.log(board)
                squarePlayed.style.pointerEvents='none'
                // if (counter >= 9) {
                //     alert("Game Over")
                // }
            }
            console.log(playerSpan)
        }
    console.log("hit")
    if (board[0] === board [1] && board[0] === board[2] && board[0] !== 0 ||
        board[0] === board [3] && board[0] === board[6] && board[0] !== 0 ||
        board[0] === board [4] && board[0] === board[8] && board[0] !== 0 ||
        board[3] === board [4] && board[3] === board[5] && board[3] !== 0 ||
        board[1] === board [4] && board[1] === board[7] && board[1] !== 0 ||
        board[6] === board [7] && board[6] === board[8] && board[6] !== 0 ||
        board[2] === board [5] && board[2] === board[8] && board[2] !== 0 ||
        board[6] === board [4] && board[6] === board[2] && board[6] !== 0) {
        window.alert("Winner is Player " + squarePlayed.innerText)
        for (let i = 0; i < 9; i++) {
        table[i].style.pointerEvents='none'
        }
    } else if (counter === 9) {
        window.alert("Cat's Game!")
    }
}

const refresh = document.getElementById('refresh')
refresh.addEventListener('click', e => {
    window.location.reload(false)
})


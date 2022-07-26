const gameBoard = (() => {
    
    
    let gameBoardArr = ['','','','','','','','',''];
    
    const getArr = () => gameBoardArr
    
    const reset = () => {
        gameBoardArr = ['','','','','','','','',''];
        
        
        let allTile = document.querySelectorAll('.square')
        console.log(allTile)
        allTile.forEach(tile => {
            tile.innerText = gameBoardArr[tile.id]
        })        
        
    }


    const handleClick = (index, player) => {
        
        let legalMove = gameBoardArr[index] == ''
        if(player && legalMove){
            gameBoardArr[index] = 'x'
        } else if (!player && legalMove){
            gameBoardArr[index] = 'o'
        }

        let tile = document.getElementById(index)
        tile.innerText = gameBoardArr[index]
        gamePlayLoop.setPlayer()
    }

    return {
        getArr,
        reset,
        handleClick
    }
})();

const Player = (name) => {
    const getName = () => name

    return {
       getName
    }
}




const render = (() => {
    let board = document.querySelector('.game-board');
    let array = gameBoard.getArr()

    
    const displayBoard = () => {
        
        while (board.firstChild){

            console.log(board.firstChild)
            board.removeChild(board.firstChild)
        }
        
        for(let i = 0; i < array.length; i++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.innerText = array[i]
            square.setAttribute('id', `${i}`)
            board.appendChild(square);
        }
        
    }
    return {
        displayBoard
    }
})()

render.displayBoard()




const gamePlayLoop = (() => {
    let player = true
    let squaresNode = document.querySelectorAll('.square')
    let resetBtn = document.querySelector('.reset')

    let playerA = Player('Greg') 
    let playerB = Player('computer')

    //changes active player
    const setPlayer = () => player = !player

    const getPlayerA = () => playerA
    const getPlayerB = () => playerB

    squaresNode.forEach(square => square.addEventListener('click', () => gameBoard.handleClick(square.id, player)))
    
    resetBtn.addEventListener('click', () => gameBoard.reset())

    

    return {
        setPlayer,
        getPlayerA,
        getPlayerB
    }
})()


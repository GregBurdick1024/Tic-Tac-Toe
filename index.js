gameBoardObj = {
    gameBoardArr: ['x','x','x','x','o','o','o','x','x']
};

gameObj = {};

playerObj = {};

let [...box] = document.querySelectorAll('.square');


function handleClick(e){
    alert(`clicked ${e.target.classList[1]}`)
}

box.forEach(box => addEventListener('click', handleClick));

box.forEach(box => {
    box.textContent(gameBoardObj.gameBoardArr[1])
})
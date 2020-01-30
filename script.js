
var interval;

function validateInput(input) {
    let values = document.getElementById(input.id).value

    values = values*1

    if (isNaN(values) || values === 0 || typeof values === 'string') {
        input.style.backgroundColor = "yellow";
        document.getElementById(input.id).value = '';
    }else if(values > 0 || values < 10){
        input.style.backgroundColor = "gray";
        document.getElementById(input.id).value = '';
    }
    
}

function boardCheck() {
    
    let count = 0;
    let win = '';
    
    let result = [
        5,3,4,6,7,8,9,1,2,
        6,7,2,1,9,5,3,4,8,
        1,9,8,3,4,2,5,6,7,
        8,5,9,7,6,1,4,2,3,
        4,2,6,8,5,3,7,9,1,
        7,1,3,9,2,4,8,5,6,
        9,6,1,5,3,7,2,8,4,
        2,8,7,4,1,9,6,3,5,
        3,4,5,2,8,6,1,7,9
    ];

    let board = document.getElementsByClassName("cell")
    for(let i =0; i< result.length; i++){
        if(board[i].value === result[i]){
            count++;
        }
    }

    if(count === result.length){
        win = 'HOREEE!!!';
    }else{
        win = 'Come on!, NOOB!';
    }
    

    return alert(win);
}



function boardReset() {
    let count =0

    let board = document.getElementsByClassName("cell")
    let timer = document.getElementById("timer")
    timer.textContent = 'Press Start'
    for(let i = 0; i< 81; i++){
        if(!board[i].disabled){
            board[i].value = '';
            board[i].style.backgroundColor = "white";
            count++;
        }
    }

    clearInterval(interval)

    return alert(`${count} total cells erased`)
}

function gameStart() {
    interval = setInterval(countTime, 1000)
}

function countTime() {
    let timer = document.getElementById("timer");
    let date = new Date();

    timer.innerHTML = date.toLocaleTimeString();
}

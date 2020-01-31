
var interval;
var newArr = []

window.onload = function () {
    boardReset()
    
}


function validateInput(event, input) {
    const value = event.target.value;
    // console.log(value);
    
    if (isNaN(value) || value == 0) {
        input.style.backgroundColor = "yellow";
    }else if(value > 0 || value < 10){
        input.style.backgroundColor = "gray";
    }
    
}

function boardCheck() {
    
    let count = 0;
    let win = '';
    
    let board = document.getElementsByClassName("cell")
    for(let i =0; i< board.length; i++){
        // console.log(Number(board[i].value));
        if(board[i].value == Number(newArr[i])){
            // console.log(board[i].value);
            count++;
        }
    }
    
    if(count === newArr.length){
        win = 'HOORAAY!!!';
    }else{

        console.log(newArr.length, count);
        win = 'Come on!, NOOB!';
    }
    

    return alert(win);
}



function boardReset() {
    let count =0
    console.log(shuffle())
    let board = document.getElementsByClassName("cell")
    let timer = document.getElementById("timer")
    let startButton = document.getElementById("start")
    let checkButton = document.getElementById("check")
    let showResult = document.getElementById("showResult")
    timer.textContent = 'Press Start'
    for(let i = 0; i< board.length; i++){
        if(i == 13 || i == 80 || i == 9 || i ==10 || i == 45 || i == 33 || i == 46){
            board[i].value = newArr[i]
            board[i].disabled = true
        }else{
            board[i].style.backgroundColor = "gray"
            board[i].value =''
            board[i].disabled = true
        }
    }

    startButton.disabled = false
    checkButton.disabled =false
    showResult.disabled = true
    clearInterval(interval)

    return alert(`${count} total cells erased`)
}

function gameStart() {
    let board = document.getElementsByClassName("cell")
    let showResult = document.getElementById("showResult")
    showResult.disabled = false
    for(let i=0; i< board.length; i++){
        if(board[i].value == ''){
            board[i].disabled =false
            board[i].style.backgroundColor = 'white'
        }
    }
    interval = setInterval(countTime, 1000)
}

function countTime() {
    let timer = document.getElementById("timer");
    let date = new Date();

    timer.innerHTML = date.toLocaleTimeString();
}


/**
 * The below function is to shuffle the sudoku board
 * 
 */

function circularArray(arr, n) {
	let firstBenchmark;
    let numToMove=0;
    let str =''

	firstBenchmark = arr[arr.length-1][arr[arr.length-1].length-1];
	
	for(let i=0; i<n; i++){
        if(i == 0 ){
            str += arr+' '
        }
        for(let j=0; j<arr.length; j++){
			for(let k=0; k<arr[j].length; k++){
				numToMove = arr[j][k];
				arr[j][k] = firstBenchmark;
				firstBenchmark = numToMove;
            }
		}
		if(arr[0][0] == firstBenchmark){
            firstBenchmark = arr[arr.length-1][arr[arr.length-1].length-1];
        }

        if(i== 2 || i == 5 || i == 6 || i == 9 || i == 12 || i== 13 || i == 16 || i == n-1){
            str += arr+' '
            
        }
    }

	return str;
} 


function shuffle() {

    
    let arr = [[2, 8, 1], [3, 7, 6], [9, 5, 4]];
    let str ='';

    str = (circularArray(arr,20))

    for(let i=0; i<str.length; i++){
        if(str[i] !== ',' && str[i] !== ' '){
            newArr[newArr.length] = (str[i])*1
            str[i] = ''
        }
    }
    
    return newArr
}

// console.log(shuffle());
function showResult() {
    let board = document.getElementsByClassName("cell")
    let startButton = document.getElementById("start")
    let checkButton = document.getElementById("check")
    alert('Do you want to show the result?')
    for(let i=0; i<newArr.length; i++){
        board[i].value = newArr[i]
        board[i].disabled = false
    }

    startButton.disabled = true


}
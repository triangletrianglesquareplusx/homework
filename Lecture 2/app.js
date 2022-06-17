function meetingChairs(arrOfRoomInfos, need){
    let chairsNeeded = need;
    let takenChairs = [];
    
    if(chairsNeeded == 0){
        return 'Game On';
    }

    let myRooms = arrOfRoomInfos.slice();
    
    for(let room of myRooms){
        if(chairsNeeded == 0){
            break;
        }
        let availableChairs = room[1] - room[0].length;
        
        // if(availableChairs > 0){
        //     chairsNeeded -= availableChairs;
        //     takenChairs.push(availableChairs);
        // }else{
        //     takenChairs.push(0);
        //     continue;
        // }
        availableChairs > 0 ? takenChairs.push(availableChairs) && (chairsNeeded -= availableChairs) : takenChairs.push(0);
    }

    if(chairsNeeded == 0){
        return takenChairs;
    }else{
        return 'Not enough!';
    }
    

}

//console.log(meetingChairs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));

function ticTacToeChecker(gameboardAs2dArr){
    
    //this function will work if I have understood correctly that empty position means ''
    if(hasPlayerWon(gameboardAs2dArr, 1)){
        return 1;
    }else if(hasPlayerWon(gameboardAs2dArr, 2)){
        return 2;
    }else if(gameHasOpenPositions(gameboardAs2dArr)){
        return -1;
    }
    return 0;
    
    //this check works now
    function gameHasOpenPositions(board){
        return board.some(row=>row.some(el=>el == '')) ? true : false;
    }
    
    function hasPlayerWon(board, symbolRepresentingPlayer){
        let hasPlayerWon = false;
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === symbolRepresentingPlayer && board[i][1] === symbolRepresentingPlayer && board[i][2] === symbolRepresentingPlayer) {
              hasPlayerWon = true;
              break;
            }
            if (board[0][i] === symbolRepresentingPlayer && board[1][i] === symbolRepresentingPlayer && board[2][i] === symbolRepresentingPlayer) {
              hasPlayerWon = true;
              break;
            }
        }
        if (!hasPlayerWon) {
            if ((board[0][0] === symbolRepresentingPlayer && board[1][1] === symbolRepresentingPlayer && board[2][2] === symbolRepresentingPlayer) ||
              (board[2][0] === symbolRepresentingPlayer && board[1][1] === symbolRepresentingPlayer && board[0][2] === symbolRepresentingPlayer)) {
              hasPlayerWon = true;
            }
          }
        return hasPlayerWon;
        
    }

}

//console.log(ticTacToeChecker([[1,0,1],[1,'',0],[2,1,2]]));
trafficLight();

function trafficLight(){
    let redElement = document.getElementById('red');
    redElement.style.backgroundColor = 'red';
    
    let yellowElement = document.getElementById('yellow');
    yellowElement.style.backgroundColor = 'grey';
    
    let greenElement = document.getElementById('green');
    greenElement.style.backgroundColor = 'grey';
    
    let colours = ['red', 'yellow', 'green', 'grey'];

    document
    .querySelector('button')
    .addEventListener('click', changeState);
    
    
    function changeState(){
        if(redElement.style.backgroundColor == colours[0]){

            redElement.style.backgroundColor = colours[3];
            yellowElement.style.backgroundColor = colours[1];
            greenElement.style.backgroundColor = colours[3];
            
        }else if(yellowElement.style.backgroundColor == colours[1]){

            yellowElement.style.backgroundColor = colours[3];
            redElement.style.backgroundColor = colours[3];
            greenElement.style.backgroundColor = colours[2];
            
        }else{

            greenElement.style.backgroundColor = colours[3];
            redElement.style.backgroundColor = colours[0];
            yellowElement.style.backgroundColor = colours[3];
            
        }
    }
}
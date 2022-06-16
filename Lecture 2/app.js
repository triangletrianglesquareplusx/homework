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
        let availableChairs = room[0].length - room[1];
        if(availableChairs >= 0){
            takenChairs.push(0);
            continue;
        }else{
            chairsNeeded -= Math.abs(availableChairs);
            takenChairs.push(Math.abs(availableChairs));
        }
    }

    if(chairsNeeded == 0){
        return takenChairs;
    }else{
        return 'Not enough!';
    }
    

}

console.log(meetingChairs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));
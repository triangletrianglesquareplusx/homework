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

console.log(meetingChairs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));
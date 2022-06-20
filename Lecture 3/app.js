initiate();
makeAllColoredSquaresTouchable();

function createSetNumberOfElements(elementTagName, number){
    let containerElement = document.querySelector('.container');
    for(let i=0;i<number;i++){
        let newElement = document.createElement(elementTagName);
        newElement.classList.add('item');
        containerElement.append(newElement);
    }
}

function getRandomElement(number){
    let randomNumber = Math.trunc(Math.random() * number);
    //FIX CLOSURE!!!!!
    console.log(randomNumber + 'this is the first time');
    
    return function(){
        randomNumber = Math.trunc(Math.random() * number);
        let allItems = document.getElementsByClassName('container')[0]
        .getElementsByClassName('item');

        let inactiveItems = [...allItems].filter(item=>!item.classList.contains('active'))[randomNumber] || 0;
        
        console.log(randomNumber, number);
        number--;
        console.log(randomNumber, number);
        return inactiveItems;
    }
}

function getRandomColorValue(){
    return Math.trunc(Math.random() * 255);
}

function initiate(){
    let numberOfElements = 30;
    let pElement = document.querySelector('p');
    createSetNumberOfElements('div',numberOfElements);
    const randomize = getRandomElement(numberOfElements);
    let myInterval = setInterval(()=>{
        
        const randomized = randomize();
        if(!randomized){
            pElement.textContent = 'Completed';
            clearInterval(myInterval);
            return;
        }
        randomized.style.backgroundColor = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
        randomized.classList.add('active');
        
    }, 1000)
}

function makeAllColoredSquaresTouchable(){
    document
    .getElementsByTagName('body')[0]
    .addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            e.currentTarget.style.backgroundColor = e.target.style.backgroundColor;
        }
    })
}
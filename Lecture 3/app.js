initiate();
makeAllColoredSquaresTouchable();
// let num = 29;
// let random = Math.trunc(Math.random() * 29);
// setInterval(()=>{
//     console.log(num);
//     console.log(Math.trunc(Math.random() * num));
//     num--;
// },2000) 


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
        let allItems = document.getElementsByClassName('container')[0]
        .getElementsByClassName('item');
        let items = [...allItems].filter(item=>!item.classList.contains('active'))[randomNumber];
        randomNumber--;
        return items;
    }
}

function getRandomColorValue(){
    return Math.trunc(Math.random() * 255);
}

function initiate(){
    let numberOfElements = 30;
    
    createSetNumberOfElements('div',numberOfElements);

    const randomize = getRandomElement(numberOfElements);
    setInterval(()=>{
        
        const randomized = randomize();
        randomized.style.backgroundColor = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
        randomized.classList.add('active');
        
    }, 2000)
}

function makeAllColoredSquaresTouchable(){
    document
    .getElementsByTagName('body')[0]
    .addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            console.log('you clicked an active square!');
            e.currentTarget.style.backgroundColor = e.target.style.backgroundColor;
        }
    })
}
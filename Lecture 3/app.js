initiate();

function createSetNumberOfElements(elementTagName, number){
    let containerElement = document.querySelector('.container');
    for(let i=0;i<number;i++){
        let newElement = document.createElement(elementTagName);
        newElement.classList.add('item');
        containerElement.append(newElement);
    }
}

function attemptEventListenerBinding(){
    //get items
    let allItems = document.getElementsByClassName('container')[0]
    .getElementsByClassName('item');
    let allItemsAsArr = Array.from(allItems);
    //simple way to attach event listener
    allItemsAsArr.forEach(item=>item.addEventListener('click',()=>{
        console.log('hey');
    }))
    
}

function getRandomElement(elementToRandomize){
    let allItems = document.getElementsByClassName('container')[0]
    .getElementsByClassName('item');
    let randomNumber = Math.trunc(Math.random() * 29) + 1;
    //return allItems[randomNumber];
    console.log(randomNumber);
    let items = [...allItems].filter(item=>!item.classList.contains('active'));
    console.log(items);
    return items[randomNumber];

}

function getRandomColorValue(){
    return Math.trunc(Math.random() * 255);
}

function initiate(){
    let numberOfElements = 30;
    
    createSetNumberOfElements('div',numberOfElements);

    
    setInterval(()=>{
        const randomElement = getRandomElement();
        randomElement.style.backgroundColor = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
        randomElement.classList.add('active');
        
    }, 2000)
}
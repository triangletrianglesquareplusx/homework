//attemptEventListenerBinding();
changeBackGroundColorAtInterval();


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

function changeBackGroundColorAtInterval(){
    let allItems = document.getElementsByClassName('container')[0]
    .getElementsByClassName('item');
        
            // setTimeout(()=>{
            //     //try to find all items
                
        
            //     let randomNumber = Math.trunc(Math.random() * 29);
            //     let itemToChange = allItems[randomNumber];
            //     if(itemToChange.textContent == ''){
            //         itemToChange.style.backgroundColor = 'red';
            //         itemToChange.classList.add('active');
            //     }
            // }, 1000);    
}
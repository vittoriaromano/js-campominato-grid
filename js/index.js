'use strict'

//functions


//funzione per creare cella
function myCreateElement(htmlElement,className,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;
     

    //al click cambiamo una classe colore e console.log la proprieta html
    element.addEventListener('click', function(){
        console.log(htmlValue);
        element.classList.add('colore');

    })
    return element;
}
//appendere cella al html
function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

//main

//ceare le celle x 100

const containerBoard = document.querySelector('.board');

//far mostrare le celle al click
 const btn = document.querySelector('.btn');


// const numeroCelle = document.querySelector('.choose');
// const numeroCelleValue = numeroCelle.value;
// let cellNumber = numeroCelleValue;
// const small = document.querySelector('.small');
// const medium =  document.querySelector('.medium');
// const large = document.querySelector('.large');
// let size = [small, medium, large];
// if(cellNumber === 'easy') { 
//              size = [2];
//              cellNumber = '100';
//     } if(cellNumber === 'medium'){
//            size = [1];
//            cellNumber = '80';
//     } else {
//             size = [0];
//             cellNumber = '50';
//     }
    
let cellNumber = '100';

 btn.addEventListener('click', function(){
     for(let i = 1; i <= cellNumber; i++){
        const createdElement = myCreateElement('div', 'large', i);
        myAppendElement(containerBoard, createdElement);
      
    }
    
  } );

  
  




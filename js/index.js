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
let cellNumber = '100'
const containerBoard = document.querySelector('.board');

//far mostrare le celle al click
 const btn = document.querySelector('.btn');

 btn.addEventListener('click', function(){
    
     for(let i = 1; i <= cellNumber; i++){
        const createdElement = myCreateElement('div', 'cell', i);
        myAppendElement(containerBoard, createdElement);
      
    }

  } )



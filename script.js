let order = [];
let clickOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number[i]+1);
    }

   let lightColor = (element, number) => {
       time = time + 500;
      
       setTimeout(() => {
           element.classList.add('selected');
       }, number - 250);

       setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
   }
}


let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i]!= order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê Acerrtou!`);
        nextLevel();
    }
}

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => {
        createElement(color).classList.remove('selected');
        checkOrder();

    },254);



}

// função que retorna a cor
let createElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    } else   if(color == 2){
        return yellow;
    } else     if(color == 3){
        return blue;
    }
}


// função para proxima nivel do jogo
let nextLevel = () =>{
    score++;
    shuffOrder();
}

let gameOver = () =>{
    alert(`Pontuaçao abaixo do esperado ${score}\nClique ok para começar um novo Jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem bem vindo ao genesis! iniciando novo jogo');
    score = 0;
    nextLevel();
}

green.addEventListener('load',click(0));
red.addEventListener('load',click(1));
blue.addEventListener('load',click(3));
yellow.addEventListener('load',click(2));

playGame();
const body = document.body;
const easyLevel = document.getElementById('easy');
const rhombusEasy = document.getElementById('rhombusEasy');
const middleLevel = document.getElementById('middle');
const rhombusMiddle = document.getElementById('rhombusMiddle');
const hardLevel = document.getElementById('hard');
const rhombusHard = document.getElementById('rhombusHard');
const startButton = document.getElementById('startButton');
const menu = document.getElementById('menu');
const rowOne = document.getElementById('rowOne');
const rowTwo = document.getElementById('rowTwo');
const rowThree = document.getElementById('rowThree');
const c1 = document.getElementById('shirtC1');
const c2 = document.getElementById('shirtC2');
const c3 = document.getElementById('shirtC3');
const c4 = document.getElementById('shirtC4');
const c5 = document.getElementById('shirtC5');
const c6 = document.getElementById('shirtC6');
const c7 = document.getElementById('shirtC7');
const c8 = document.getElementById('shirtC8'); 
const c9 = document.getElementById('shirtC9');
let cardFace = document.getElementById('cardFace');
let numberOfCards = 3;


easyLevel.onmouseover = function(){
  rhombusEasy.style.opacity='.7';
};
easyLevel.onmouseout = function(){
  rhombusEasy.style.opacity='.1';
};

middleLevel.onmouseover = function(){
  rhombusMiddle.style.opacity='.7';
};
middleLevel.onmouseout = function(){
  rhombusMiddle.style.opacity='.1';
};

hardLevel.onmouseover = function(){
  rhombusHard.style.opacity='.7';
};
hardLevel.onmouseout = function(){
  rhombusHard.style.opacity='.1';
};

easyLevel.addEventListener('click', event => {
  rhombusEasy.style.opacity='1';
  rhombusMiddle.style.opacity='.1';
  rhombusHard.style.opacity='.1';
  numberOfCards = 3;
});  

middleLevel.addEventListener('click', event => {
  rhombusEasy.style.opacity='.1';
  rhombusMiddle.style.opacity='1';
  rhombusHard.style.opacity='.1';
  numberOfCards = 6;
});

hardLevel.addEventListener('click', event => {
  rhombusEasy.style.opacity='.1';
  rhombusMiddle.style.opacity='.1';
  rhombusHard.style.opacity='1';
  numberOfCards = 9;
});

startButton.addEventListener('click', event => {
switch (numberOfCards) {
  case '3' :
    easyGame();   
  break; 
   case '6':
    middleGame();
  break;
   case '9':
    hardGame();
  break;
  default: easyGame();
 };
}); 

backSide();

function easyGame() {
  menu.style.display = 'none';
  rowOne.style.display = 'flex';
  c1.addEventListener('click', returnCard1); 
  c2.addEventListener('click', returnCard2);
  c3.addEventListener('click', returnCard3);
}

function middleGame() {
  menu.style.display = 'none';
  rowOne.style.display = 'flex';
  rowTwo.style.display = 'flex';
  c1.addEventListener('click', returnCard1); 
  c2.addEventListener('click', returnCard2);
  c3.addEventListener('click', returnCard3);
  c4.addEventListener('click', returnCard4); 
  c5.addEventListener('click', returnCard5);
  c6.addEventListener('click', returnCard6);
}

function hardGame() {
  menu.style.display = 'none';
  rowOne.style.display = 'flex';
  rowTwo.style.display = 'flex';
  rowThree.style.display = 'flex';
  c1.addEventListener('click', returnCard1); 
  c2.addEventListener('click', returnCard2);
  c3.addEventListener('click', returnCard3);
  c4.addEventListener('click', returnCard4); 
  c5.addEventListener('click', returnCard5);
  c6.addEventListener('click', returnCard6);
  c7.addEventListener('click', returnCard7); 
  c8.addEventListener('click', returnCard8);
  c9.addEventListener('click', returnCard9);
}


function backSide(cardFace) {
  let ip=[];
  ip[0]='url(./pics/bug.png)';
  ip[1]='url(./pics/gameOver.png)';
  ip[2]='url(./pics/gameOver.png)';
  ip[3]='url(./pics/gameOver.png)';
  ip[4]='url(./pics/gameOver.png)';
  cardFace.style.background-image = [Math.floor(Math.random()*a.length)]
}


let returnCard1 = (c1) => { c1.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard2 = (c2) => { c2.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard3 = (c3) => { c3.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard4 = (c4) => { c4.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard5 = (c5) => { c5.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard6 = (c6) => { c6.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard7 = (c7) => { c7.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard8 = (c8) => { c8.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}
let returnCard9 = (c9) => { c9.style.transform = "rotateY(180deg)";
backSide.style.transform = "rotateY(360deg)";}


"use strict"

let progressBar = document.querySelector(".progress-bar");
let bigCup = document.querySelector(".cup");
let state = "idle" /*переменная state отвечает за текущее состояние кофемашины. "idle" - ожидание; "cooking" - готовка , "ready" - кофе готов, но пока не забран. После забора кофе state возвращается в значение "idel"*/

function makeCoffee(name, price, element) {
  if (state != "idle") {
    return;
  }
  let balance = document.querySelector(".form-control");
 console.log(element);
 
if (+balance.value >= price) {
  balance.value -= price; //balance.value = balance.value - price
  balance.style.backgroundColor = "";
  changeDisplayText(`Ваш ${name} готовится`);
  state = "cooking";
  
  let coffeeCup = element.querySelector("img");
  let cupSrc = coffeeCup.getAttribute("src");
  console.log(cupSrc);
  bigCup.setAttribute("src", cupSrc);
  bigCup.style.display = "inline";
  
  let readyPercent = 0;
  let cookingInterval = setInterval(function() {
    readyPercent++;
    //console.log(readyPercent);
    requestAnimationFrame(function() {
    bigCup.style.opacity = readyPercent + "%"; 
    progressBar.style.width = readyPercent + "%";
  })
  //bigCup.style.opacity = readyPercent + "%"; 
  //progressBar.style.width = readyPercent + "%"
  changeDisplayText(`Ваш ${name} готовится. ${readyPercent}%`);
  if(readyPercent >= 100) {
    clearInterval(cookingInterval);
    changeDisplayText(`Ваш ${name} ГОТОВ!`);
    state = "ready";
    bigCup.style.cursor = "pointer";
    bigCup.onclick = function() {
      takeCoffee();
    }
  }
}, 30)
  
} else {
  balance.style.backgroundColor = "red";
  changeDisplayText("Недостаточно средств");
  }
}
function takeCoffee() {
  bigCup.style.display = "none";
  bigCup.style.opacity = 0;
  bigCup.style.cursor = "";
  
  
  progressBar.style.width = 0;
  
  changeDisplayText("Выберите кофе");
  bigCup.onclick = null;
  state = "idle";
}

function changeDisplayText(message) {
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML = message;
}
//----------------Drag 'n' Drop ----------------
let money = document.querySelectorAll(".money img");/*Запрос всех картинок купюр*/
/*for(let i =0; i < mony.length; i++) {/*перебор каждой купюры bill*/
/*let bill = money[i];*/
// }
for(let bill of money) {
  bill.onmousedown = function(event) {/*к каждой купюре привязали событие перетаскивание мышью купюры 'onmousedown' */
  takeMoney(event, bill);
  /*console.log(event);*/
  }
}
function takeMoney(event, bill) {
  event.preventDefault();/*приостанавливает стандартные действия на событие реакции мыши*/
 let mouseX = event.clientX;/*Устанавливаем Координаты мыши*/
 let mouseY = event.clientY;
 bill.style.transform = "rotate(90deg)";
 
 let billCoords = bill.getBoundingClientRect();
 console.log(billCoords);
 
 bill.style.position = "absolute";
 bill.style.top = mouseY - billCoords.width/2 + "px";
 bill.style.left = mouseX - billCoords.height/2 + "px";
 
 window.onmousemove = function(event) {
 let mouseX = event.clientX;
 let mouseY = event.clientY; 
 bill.style.top = mouseY - billCoords.width/2 + "px";
 bill.style.left = mouseX - billCoords.height/2 + "px";

 }
bill.onmouseup = function(event) {
  window.onmousemove = null;
 /* console.log( inAtm(bill) );*/
 if ( inAtm(bill)) {
   /*console.log(bill.dataset.cost);*/
    let balance = document.querySelector(".form-control");
    balance.value = +balance.value + +bill.dataset.cost;
    bill.remove();
 }
 }
}

function inAtm(bill) {
 let atm = document.querySelector(".atm");
 let atmCoords = atm.getBoundingClientRect();
 let billCoords = bill.getBoundingClientRect();
 
 let atmLeftTopX = atmCoords.x;
 let atmLeftTopY = atmCoords.y;
 
 let atmLeftBottomX = atmCoords.x;
 let atmLeftBottomY = atmCoords.y + atmCoords.height/3;
 
 let atmRightTopX = atmCoords.x + atmCoords.width;
 let atmRightTopY = atmCoords.y + atmCoords.width;
 
 let billLeftTopX = billCoords.x;
 let billLeftTopY = billCoords.y;
 
 let billRightTopX = billCoords.x + billCoords.width;
 let billRightTopY = billCoords.y;
 
 /*console.log ([atmLeftTopX, atmLeftTopY, atmLeftBottomX, atmLeftBottomY, atmRightTopX, atmRightTopY, billLeftTopX, billLeftTopY,  billRightTopX, billRightTopY]);*/
 
if (billLeftTopX > atmLeftTopX
    && billLeftTopY > atmLeftTopY 
    && billLeftTopY < atmLeftBottomY
    && billRightTopX < atmRightTopX)
{
  return true;
} else {
  return false;
}
}

//------------------Создание элементов--------------
let changeButton = document.querySelector(".change-button");
changeButton.onclick = function() {
  takeChange();
}
function takeChange() {
  let balance = document.querySelector(".form-control");
  if (balance.value >= 10) {
    balance.value -= 10;
    createCoin("10");
    return setTimeout(function() {
      takeChange();
    }, 300);
  } else if (balance.value >= 5) {
    balance.value -= 5;
    createCoin("5");
    return setTimeout(function() {
      takeChange();
    }, 300);
  } else if (balance.value >= 2) {
    balance.value -= 2;
    createCoin("2");
    return setTimeout(function() {
    }, 300);
  } else if (balance.value >= 1) {
    balance.value -= 1;
    createCoin("1");
    return setTimeout(function() {
      takeChange();
    }, 300);
  }
 }
function createCoin(nominal) {
 /* let coinSrc = "img/10rub.png";*/
 let coinSrc = "";
 switch (nominal) {
  case "10":
   coinSrc = "img/10rub.png";
   break;
  case "5":
   coinSrc = "img/5rub.png";
   break;
  case "2":
   coinSrc = "img/2rub.png";
   break;  
  case "1":
   coinSrc = "img/1rub.png";
   break; 
   default:
   return console.error("неправильный номинал монеты");
 }
  let coin = document.createElement("img");
  coin.setAttribute("src", coinSrc);
  coin.style.width = "50px";
  coin.style.height = "50px";
  coin.style.position = "absolute";
  let changeContainer = document.querySelector(".change-container");
  changeContainer.append(coin);/*append добавляет в конец контейнера тег с изображением 10 рубл. */
  let containerCoords = changeContainer.getBoundingClientRect();
  coin.style.top = Math.floor(Math.random() * (containerCoords.height - 50)) + "px";
  coin.style.left = Math.floor(Math.random() * (containerCoords.width - 50)) + "px";
  coin.style.transition = "transform 300ms ease-in";/*вкл режим анимации*/
  coin.style.transform = "translateY(-45%)";/*появление сверху*/
  setTimeout(function() {
    coin.style.transform = "translateY(0%)";
  }, 30);
  changeContainer.append(coin);
  
  /*Внутрь в начало - prepend
  рядом перед - before
  радом после - after
  вместо - replaceWith
  */
  
  
}







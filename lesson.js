"use strict"

//Методы поиска по DOM-элементам
//*поиск по тегам*/
// let images = document.getElementsByTagName("img");
// console.log(images);
// /*поиск по классам*/
// let coffeelist = document.getElementsByClassName("coffee-item");
// console.log(coffeelist);
// /*поиск по ID*/
// let coffee = document.getElementById("coffee-mashine");
// console.log(coffee);

//Современные методы поиска

// let atm = document.querySelector(".atm-container img");
// console.log(atm);

// let coffeeItem = document. querySelector(".coffee-item");
// console.log(coffeeItem);

// let coffeeNames = document.querySelectorAll("span");
// console.log(coffeeNames);

// let button = document.querySelector(".btn");
// console.log(button);

// let cup = document.querySelectorAll(".coffee-item img");
// console.log(cup);

// let buttons = document.querySelectorAll(".coffee-item");
// let cappuccinoButton  = buttons[1];
// console.log(cappuccinoButton);

// let coffeeList = cappuccinoButton.parentElement;
// console.log(coffeeList);

// let nextCoffee = cappuccinoButton.nextElementSibling;
// console.log(nextCoffee);

// let previousCoffee = cappuccinoButton.previosElementSibling;
// console.log(previousCoffee);

// let cappuccinoChildren = cappuccinoButton.children;
// console.log(cappuccinoChildren);

// let cappuccinoText = cappuccinoButton.querySelector("span");
// console.log(cappuccinoText);

// Изменение стилей

//изменение css-стилей
// let bigCup = document.querySelector(".cup");
// console.log(bigCup.style.width);//пустая строка
// bigCup.style.width = "250px";

// bigCup.style.display = "none";// скрыть элемент
// bigCup.style.display = "";// вернуть как было

// bigCup.style.backgroundColor = "#FAFAD2";
// bigCup.style.transition = "transform 5s";
// setTimeout(function() {
//bigCup.style.transform = "rotate(360deg)";
// }, 5000);

//Изменение атрибутов
// ===============================
// let bigCup = document.querySelector(".cup");

// console.log(bigCup.hasAttribute("src"));

// let cupSrc = bigCup.getAttribute("src");
// console.log(cupSrc);

// bigCup.setAttribute("src", "img/cappuccino.png");
//bigCup.removeAttribute("src");


// задание

// let btns = document.querySelectorAll(".coffee-item");//поиск всех кнопок класса 
// let espresso = btns[2];
// let espressoImage = espresso.querySelector("img");

// let espressoSrc = espressoImage.getAttribute("src");// 
// let bigCup = document.querySelector(".cup");
// bigCup.setAttribute("src", espressoSrc);


// // Измененеие внутреннего содержимого элемента
// let displayText = document.querySelector(".display-text");

// console.log(displayText.innerText);
// //displayText.innerText = "ваш <b>капучино</b> готовится"; // видны теги
// displayText.innerHTML = "Ваш <b>***Латтэ***</b> готовится";

// let coffeeList = document.querySelector(".coffee-list");
// for(let i = 0; i < 2; i++) {
//   coffeeList.innerHTML = coffeeList.innerHTML + `
//   <div class="coffee-item">
//     <img src="img/americano.png" alt ="СУПЕР-Американо">
//     <span> Супер-Американо - 65 руб. </span>
//   </div>
//       `;
  
// }

// let changeBtn = document.querySelector(".btn");

// // console.log(changeBtn.className);// нашедшее записываем в className
// // changeBtn.className = "btn btn-success btn-block";// замена цвета на зеленый


// console.log(changeBtn.classList);

// changeBtn.classList.add("p-3"); //добавить класс
// changeBtn.classList.remove("my-2"); //удалить класс
// console.log(changeBtn.classList.contains("btn")); //проверить наличие

//Планирование
// let coffeeOper = document.querySelector(".coffee-oper");
// setTimeout(function() {
// coffeeOper.style.backgroundColor = "PaleGoldenRod"; /*перекрасили в другой цвет*/
// }, 3000);

// setTimeout(function() {
// coffeeOper.style.backgroundColor = "";
// }, 5000);/*возврат значения первоначального цвета*/

// setInterval(function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 1000);

// let displayInterval = setInterval(function() {
//   let display = document.querySelector(".display");
//   display.classList.toggle("bg-danger");
// }, 1000);

// setTimeout(function() {
//   clearInterval(displayInterval);
// }, 6000);



// function changeDisplayText() {
//   let display = document.querySelector(".display");
//   display.innerHTML = "Ваш кофе готовится!";
// }  
 
// setTimeout(changeDisplayText, 5000);
 
// setTimeout(function() {
//   changeDisplayText();
// }, 5000);
 
//События и слушатели событий

/*
click - нажатие левой кнопки мыши
mouserover - наведение мышью на элемент
mouseout - уводим курсор с элемента
mousedown - зажали левую кнопку мыши на элементе
mouseup - отпустили левую кнопку мыши

dblclick - двойное нажатие
contextmenu - нажатие правой кнопки мыши
------------------------------------------------------------

focus - начинается ввод в input
change -пользователь что-то ввел в input

keydown - нажатие кнопки на клавиатуре
keyup - отжали кнопку


transitionend - событиие окончания транзиции

submit - отправка формы
*/
// Вешаем событие с помощью атрибута HTML

/* 
<div onclick="showMessage();"> нажмите на меня </div>
*/
// 2/ Вешаем событие через свойство

// let changeBtn = document.querySelector(".btn");

// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// }
// changeBtn.onclick = alert("Даем сдачу");

// 3/ Метод addEventListener(event, function)
// let changeBtn = document.querySelector(".btn");
// changeBtn.addEventListener("click", function() {
//   alert("Даем сдачу");
// });
// changeBtn.addEventListener("click", function() {
//   console.log("Даем сдачу");
// });


// 4 Снимаем слушателя событий
// 4.1 как свойство
// let changeBtn = document.querySelector(".btn");
// changeBtn.onclick = function() {
//   alert("Даем сдачу");
// }
// changeBtn.onclick = null;

// let changeBtn = document.querySelector(".btn");
// function handler() {
//   alert("Даем сдачу");
// }
// changeBtn.addEventListener("click", handler);
// changeBtn.removeEventListener("click", handler); /*снимает события*/
/*
let changeCup = document.querySelector(".cup");
changeCup.onclick = function() {
  let changeDisplay = document.querySelector(".display");
  if (changeDisplay.style.backgroundColor == "red") {
    changeDisplay.style.backgroundColor = "";
  } else {
     changeDisplay.style.backgroundColor = "red";*/
/*  }
}
*/
// let coffeeButtons = document.querySelectorAll(".coffee-item");
// for (let i = 0; i < coffeeButtons.length; i++) {
//   coffeeButtons[i].onclick = function() {
//     console.log(this);
//     makeCoffee("Американо", 25, this)
  }
}







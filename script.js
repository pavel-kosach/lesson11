"use strict";

const btn = document.getElementById("btn");
const square = document.getElementById("square");
const textInput = document.getElementById("text");
const circleBtn = document.getElementById("e_btn");
const rangeInput = document.querySelector("input[type=range]");
const circle = document.getElementById("circle");
let getColor;
let circleSize;

// Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
const getTextValue = function (event) {
  getColor = event.target.value;
};
const changeColor = function () {
  square.style.backgroundColor = getColor;
};
textInput.addEventListener("input", getTextValue);
btn.addEventListener("click", changeColor);

// В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "
circleBtn.style.display = "none";

// Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)
const size = function (event) {
  circleSize = event.target.value;
  circle.style.width = circleSize + "%";
  circle.style.height = circleSize + "%";
};
rangeInput.addEventListener("input", size);

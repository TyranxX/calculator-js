// "use strict";

// Variables assignment

let disp = document.querySelector(".display");
const btnZero = document.querySelector(".btn-0");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const btnThree = document.querySelector(".btn-3");
const btnFour = document.querySelector(".btn-4");
const btnFive = document.querySelector(".btn-5");
const btnSix = document.querySelector(".btn-6");
const btnSeven = document.querySelector(".btn-7");
const btnEight = document.querySelector(".btn-8");
const btnNine = document.querySelector(".btn-9");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnDivide = document.querySelector(".btn-divide");
const btnMul = document.querySelector(".btn-mul");
const btnEqual = document.querySelector(".btn-equal");
const btnReset = document.querySelector(".btn-reset");
const btnDelete = document.querySelector(".btn-del");
const btnDecimal = document.querySelector(".btn-dec");
const answer = document.querySelector(".answer");
const hist = document.querySelector(".history");

// Display function on Click
let num = "";
let keyword;          //stoing string values for Switch case
let flag = 0;         //it is for preventing multiple decimal press
let flagOps = 0;      //it is for preventing multiple operators press
// let digit = "";
let str;
let a;
const regx = /^[-+*/. 0-9 ]/; //the arrow at front handles the Function keys exception as it will restrict the strings starting with characters
const ops = /[-+*/]/;

const dispClick = function () {
  if (ops.test(this.textContent)) {     //to reset the flag for Decimal input
    flag = 0;
  }

  if (num === a) {          //To handle display when answer is displayed
    if (ops.test(this.textContent) && flagOps === 0) {        //To handle only operator inputs after result display and prevent multiple operator presses
      num = num + this.textContent;
      disp.textContent = num;
      answer.style.visibility = "hidden";
      flagOps = 1;
    }
    else {        //if numbers are enterd after the results are displayed the calc will reset and start again
      reset();
      num = num + this.textContent;
      disp.textContent = num;
    }
  } else {               // To handle diplay at start     
    if (ops.test(this.textContent) && flagOps === 0) {    //To handle only operator inputs after result display and prevent multiple operator presses
      num = num + this.textContent;
      disp.textContent = num;
      answer.style.visibility = "hidden";
      flagOps = 1;
    } else if (flag === 0 || this.textContent !== ".") {  //To allow numbers or operators after decimal press
      if (!ops.test(this.textContent)) {        //preventing multiple operator presses
        num = num + this.textContent;
        disp.textContent = num;
        answer.style.visibility = "hidden";
        flagOps = 0;
      }
    }
  }

  if (this.textContent === ".") {     //To prevent multiple Decimal inputs
    flag = 1;
  }
};

const dispPress = function (e) {
  if (regx.test(e.key)) {
    keyword = "Numops";
  } else {
    keyword = e.key;
  }
  switch (keyword) {
    case "Numops":
      if (ops.test(e.key)) {
        flag = 0;
      }

      if (num === a) {
        if (ops.test(e.key) && flagOps === 0) {
          num = num + e.key;
          disp.textContent = num;
          answer.style.visibility = "hidden";
          flagOps = 1;
        }
        else {
          reset();
          num = num + e.key;
          disp.textContent = num;
        }
      } else {
        if (ops.test(e.key) && flagOps === 0) {
          num = num + e.key;
          disp.textContent = num;
          answer.style.visibility = "hidden";
          flagOps = 1;
        } else if (flag === 0 || e.key !== ".") {
          if (!ops.test(e.key)) {
            num = num + e.key;
            disp.textContent = num;
            answer.style.visibility = "hidden";
            flagOps = 0;
          }
        }
      }

      if (e.key === ".") {
        flag = 1;
      }
      break;
    case "Backspace":
      del();
      break;
    case "Escape":
      reset();
      break;
    case "Enter":
      dispResult();
  }
  // if (regx.test(e.key)) {
  //   // console.log(e.key);
  //   num = num + e.key;
  //   disp.textContent = num;
  //   answer.style.visibility = "hidden";
  // }

  // else if (e.key === "Backspace") {       //the order of the else ifs matter
  //   del();
  // }
  // else if (e.key === "Escape") {
  //   reset();
  // }
  // else if (e.key === "Enter") {
  //   dispResult();
  // }
};

const del = function () {
  if (disp.textContent == a) {
    reset();
  } else {
    str = String(num);
    const string = str.split("");
    if (string[string.length - 1] === ".") {
      flag = 0;
    }
    if (string[string.length - 1] === "+" || "-" || "*" || "/") {
      flagOps = 0;
    }
    string.pop();
    console.log(string);
    str = string.join("");
    num = str;
    disp.textContent = num;
  }
};

const dispResult = function () {
  a = eval(num);
  disp.textContent = a;
  num = a;
  answer.style.visibility = "visible";

  // console.log(typeof a);
};

// const answer = function () {
//     disp.textContent = a;
//     // num = a
// }

const reset = function () {
  num = "";
  flag = 0;
  // a = num;
  disp.textContent = num;
  answer.style.visibility = "hidden";
};

window.addEventListener("keydown", dispPress);
btnZero.addEventListener("click", dispClick);
btnOne.addEventListener("click", dispClick);
btnTwo.addEventListener("click", dispClick);
btnThree.addEventListener("click", dispClick);
btnFour.addEventListener("click", dispClick);
btnFive.addEventListener("click", dispClick);
btnSix.addEventListener("click", dispClick);
btnSeven.addEventListener("click", dispClick);
btnEight.addEventListener("click", dispClick);
btnNine.addEventListener("click", dispClick);
btnPlus.addEventListener("click", dispClick);
btnMinus.addEventListener("click", dispClick);
btnDivide.addEventListener("click", dispClick);
btnMul.addEventListener("click", dispClick);
btnDecimal.addEventListener("click", dispClick);

btnEqual.addEventListener("click", dispResult);

btnReset.addEventListener("click", reset);

btnDelete.addEventListener("click", del);

// key press

// dispClick();

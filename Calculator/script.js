// calculator script

let display = document.getElementById("main-display");

let btnAC = document.getElementById("AC");
btnAC.addEventListener("click", ALLCLEAR);
function ALLCLEAR() {
  display.innerHTML = 0;
  dispValue = "0";
  value1 = "0";
  value2 = 0;
}

let dispValue = "0";
let value1 = "0";
let value2 = 0;

let btnRoot = document.getElementById("root");
btnRoot.addEventListener("click", function () {
  display.innerHTML = ROOT(Number(value1)).toFixed(3);
  dispValue = Number(display.innerHTML);
  value1 = display.innerHTML;
});

let btnPercentage = document.getElementById("percentage");
btnPercentage.addEventListener("click", function () {
  display.innerHTML += "%";
});

let btnPower = document.getElementById("power");
btnPower.addEventListener("click", function () {
  display.innerHTML += "^";
});

let btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", function () {
  display.innerHTML += "/";
});

let btn9 = document.getElementById("b9");
btn9.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 9;
  } else {
    display.innerHTML += "9";
  }
  SETVALUE();
});

let btn8 = document.getElementById("b8");
btn8.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 8;
  } else {
    display.innerHTML += 8;
  }
  SETVALUE();
});

let btn7 = document.getElementById("b7");
btn7.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 7;
  } else {
    display.innerHTML += 7;
  }
  SETVALUE();
});

let btnProduct = document.getElementById("multiply");
btnProduct.addEventListener("click", function () {
  display.innerHTML += "*";
});

let btn6 = document.getElementById("b6");
btn6.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 6;
  } else {
    display.innerHTML += 6;
  }
  SETVALUE();
});

let btn5 = document.getElementById("b5");
btn5.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 5;
  } else {
    display.innerHTML += 5;
  }
  SETVALUE();
});

let btn4 = document.getElementById("b4");
btn4.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 4;
  } else {
    display.innerHTML += 4;
  }
  SETVALUE();
});

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", function () {
  display.innerHTML += "-";
});

let btn3 = document.getElementById("b3");
btn3.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 3;
  } else {
    display.innerHTML += 3;
  }
  SETVALUE();
});

let btn2 = document.getElementById("b2");
btn2.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 2;
  } else {
    display.innerHTML += 2;
  }
  SETVALUE();
});

let btn1 = document.getElementById("b1");
btn1.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 1;
  } else {
    display.innerHTML += 1;
  }
  SETVALUE();
});

let btnAdd = document.getElementById("plus");
btnAdd.addEventListener("click", function () {
  display.innerHTML += "+";
});

let btn0 = document.getElementById("b0");
btn0.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = 0;
  } else if (dispValue === "0.") {
    display.innerHTML += 0;
  } else {
    display.innerHTML += 0;
  }
  SETVALUE();
});

let btnPoint = document.getElementById("point");
btnPoint.addEventListener("click", function () {
  dispValue = display.innerHTML;
  if (dispValue === "0" || dispValue == 0) {
    display.innerHTML = "0.";
  } else {
    display.innerHTML += ".";
  }
  SETVALUE();
});
function SETVALUE() {
  if (display.innerHTML == "") {
    value1 = 0;
  }
  // value1 = display.innerHTML
  // let l = display.innerHTML;
  // l = l.length;
  // let p;
  // if (
  //   !display.innerHTML.indexOf("^") == -1 ||
  //   !display.innerHTML.indexOf("%") == -1 ||
  //   !display.innerHTML.indexOf("+") == -1 ||
  //   !display.innerHTML.indexOf("-") == -1 ||
  //   !display.innerHTML.indexOf("*") == -1 ||
  //   !display.innerHTML.indexOf("/") == -1
  // ) {
  //   if (display.innerHTML.indexOf("^") == -1) {
  //     p = display.innerHTML.indexOf("^");
  //     value1 = display.innerHTML.substring(0, p-1);
  //     display.innerHTML = value1;
  //   } else if (!display.innerHTML.indexOf("%") == -1) {
  //     p = display.innerHTML.indexOf("%");
  //     value1 = display.innerHTML.substring(0, p-1);
  //     display.innerHTML = value1;
  //   } else if (!display.innerHTML.indexOf("+") == -1) {
  //     p = display.innerHTML.indexOf("+");
  //       value1 = display.innerHTML.substring(0, p-1);
  //       display.innerHTML = value1;
  //   } else if (!display.innerHTML.indexOf("-") == -1) {
  //     p = display.innerHTML.indexOf("-");
  //       value1 = display.innerHTML.substring(0, p-1);
  //       display.innerHTML = value1 ;
  //   } else if (!display.innerHTML.indexOf("*") == -1) {
  //     p = display.innerHTML.indexOf("*");
  //       value1 = display.innerHTML.substring(0, p-1);
  //       display.innerHTML = value1 ;
  //   } else if (!display.innerHTML.indexOf("/") == -1) {
  //     p = display.innerHTML.indexOf("/");
  //       value1 = display.innerHTML.substring(0, p-1);
  //       display.innerHTML = value1;
  //   }else{
  //     display.innerHTML = value1
  //   }
  // }
  // // value1 = display.innerHTML.substring(0, p);
  // display.innerHTML = value1;
  // console.log(value1, p);
  value1 = Number(display.innerHTML);
  // console.log(value1);
}

let btnClear = document.getElementById("clear");
btnClear.addEventListener("click", CLEAR);
function CLEAR() {
  let integer = display.innerHTML;
  integer = String(integer);
  integer = integer.substring(0, integer.length - 1);
  display.innerHTML = integer;
  SETVALUE();
}

// setting the logic
function ROOT(num1) {
  value1 = 0;
  return Math.sqrt(num1);
}

function PERCENTAGE(num1, num2) {
  value1 = 0;
  value2 = 0;
  SETVALUE();

  return (num1 / num2) * 100;
}

function POWER(num1, num2) {
  // SETVALUE();

  return Math.pow(num1, num2);
}

function DIVIDE(num1, num2) {
  // SETVALUE()
  return num1 / num2;
}

function MULTIPLY(num1, num2) {
  // SETVALUE();

  return num1 * num2;
}

function MINUS(num1, num2) {
  // SETVALUE();

  return num1 - num2;
}

function ADD(num1, num2) {
  // SETVALUE();

  return num1 + num2;
}

let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", function () {
  if (!(display.innerHTML.indexOf("^") == -1)) {
    let p = display.innerHTML.indexOf("^");
    let l = display.innerHTML;
    l = l.length;
    value1 = display.innerHTML.substring(0, p);
    value2 = display.innerHTML.substring(p + 1, l);
    console.log(value1, value2);
    display.innerHTML = POWER(value1, value2).toFixed(1);
    value1 = display.innerHTML;
  } else if (!(display.innerHTML.indexOf("%") == -1)) {
    let p = display.innerHTML.indexOf("%");
    let l = display.innerHTML;
    l = l.length;
    value1 = display.innerHTML.substring(0, p);
    value2 = display.innerHTML.substring(p + 1, l);
    console.log(value1, value2);
    display.innerHTML = PERCENTAGE(value1, value2).toFixed(3);
    value1 = display.innerHTML;
  } else {
    let int = display.innerHTML;
    display.innerHTML = eval(int);
    value1 = display.innerHTML;
  }
});

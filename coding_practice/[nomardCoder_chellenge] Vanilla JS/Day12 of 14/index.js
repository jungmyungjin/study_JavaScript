let number1 = null, number2 = null, operator = null, tmpNumber = '';

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const print = document.querySelector(".print");
const equals = document.querySelector(".equals");

function handleBtnNumber(event) {
  const inputNumber = event.target.value;
  tmpNumber = `${tmpNumber}${inputNumber}`;
  print.value = tmpNumber;
}

function handleBtnOperator(event) {
  const inputOperator = event.target.value;
  operator = inputOperator;
  if (number1 === null) {
    number1 = parseInt(tmpNumber);
    tmpNumber = '';
  }
  else {
    number2 = parseInt(tmpNumber);
    tmpNumber = '';
    switch (operator) {
      case '+': number1 = number1 + number2;
        break;
      case '-': number1 = number1 - number2;
        break;
      case '*': number1 = number1 * number2;
        break;
      case '/': number1 = number1 / number2;
        break;
    }
    print.value = number1;
    number2 = null;
    tmpNumber = '';
  }
}

function handleBtnEquals(event) {
  number2 = parseInt(tmpNumber);
  if (operator !== null) {
    switch (operator) {
      case '+': number1 = number1 + number2;
        break;
      case '-': number1 = number1 - number2;
        break;
      case '*': number1 = number1 * number2;
        break;
      case '/': number1 = number1 / number2;
        break;
    }
    print.value = number1;
    tmpNumber = number1;
    number1 = null, number2 = null;
  }
}

function handleBtnClear(event) {
  number1 = 0, number2 = null, operator = null, tmpNumber = '';
  print.value = "0";
}

function init() {
  clear.addEventListener("click", handleBtnClear);
  equals.addEventListener("click", handleBtnEquals);

  for (const number of numbers) {
    number.addEventListener("click", handleBtnNumber);
  }
  for (const operator of operators) {
    operator.addEventListener("click", handleBtnOperator);
  }

}

init();

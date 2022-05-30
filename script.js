const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

function updateDisplay() {
  document.getElementById("output").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

const app = document.getElementById("app");
const appButtons = app.getElementsByTagName("button");

for (let button of appButtons) {
  button.addEventListener("click", function (event) {
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
  });
}

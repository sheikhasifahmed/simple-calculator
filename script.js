const displayInput = document.getElementById("display-input");
const digits = document.querySelectorAll(".digit");
const btnAllClear = document.getElementById("all-clear");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const btnAns = document.getElementById("ans");
let ans = 0;

let restart = 0;

for (const digit of digits) {
  digit.addEventListener("click", function () {
    if (restart === 0) displayInput.value += digit.textContent;
  });
}

equal.addEventListener("click", function () {
  try {
    let cal = parseFloat(eval(displayInput.value).toFixed(5));
    displayInput.value = cal;
    ans = cal;
  } catch (e) {
    displayInput.value = "Error";
  }
  restart = 1;
  displayInput.disabled = true;
});

btnAns.addEventListener("click", function () {
  displayInput.value += ans;
});

clear.addEventListener("click", function () {
  let displayString = displayInput.value;
  let clearString = displayString.slice(0, -1);

  displayInput.value = clearString;
  if (restart === 1) allClear();
});

function allClear() {
  displayInput.value = "";
  restart = 0;
  displayInput.disabled = false;
}

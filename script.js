const displayInput = document.getElementById("display-input");
const digits = document.querySelectorAll(".digit");
const allClear = document.getElementById("all-clear");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let restart = 0;

for (const digit of digits) {
  digit.addEventListener("click", function () {
    if (restart === 0) displayInput.value += digit.textContent;
  });
}

equal.addEventListener("click", function () {
  try {
    let cal = eval(displayInput.value).toFixed(5);
    displayInput.value = parseFloat(cal);
  } catch (e) {
    displayInput.value = "Error";
  }
  restart = 1;
});

clear.addEventListener("click", function () {
  let displayString = displayInput.value;
  let clearString = displayString.slice(0, -1);

  displayInput.value = clearString;
  if (restart === 1) {
    displayInput.value = "";
    restart = 0;
  }
});

allClear.addEventListener("click", function () {
  displayInput.value = "";
  restart = 0;
});

const displayInput = document.getElementById("display-input");
const digits = document.querySelectorAll(".digit");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

for (const digit of digits) {
  digit.addEventListener("click", function () {
    displayInput.value += digit.textContent;
  });
}

equal.addEventListener("click", function () {
  let cal = eval(displayInput.value);

  displayInput.value = cal;
});

clear.addEventListener("click", function () {
  let displayString = displayInput.value;
  let clearString = displayString.slice(0, -1);

  displayInput.value = clearString;
});

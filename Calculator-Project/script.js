const display = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

// Added Eventlistener on buttons through "ForEach" Loop
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      display.value = "";

    } else if (buttonText === "Del") {
      display.value = display.value.slice(0, -1);

    } else if (buttonText === "=") {
      // eval is used to convert the string into number.
      display.value = eval(display.value);
      
    } else {
      display.value += buttonText;
    }
  });
});

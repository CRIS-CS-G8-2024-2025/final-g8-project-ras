// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
      display.value += input;
}

function clearDisplay(){
      display.value = "";
}

function calculate(){
      try{
          display.value = eval(display.value);
      }
      catch(error){
          display.value = "Error";
      }
}

document.addEventListener(
      "keydown",
      (event) => {
            const keyName = event.key;
            console.log(keyName);
            if (keyName == "Enter") {
                  calculate();
            } else if(keyName == "Backspace") {
                  clearDisplay();
            } else {
                  appendToDisplay(keyName);
            }
      });
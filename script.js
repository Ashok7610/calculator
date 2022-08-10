console.log("calculator calculation");

//  let string = "";
//  buttons = document.querySelectorAll('.button');

//   Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e)=>{
//         console.log(e.target);
//     })
//   });
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let screenValue = screen.value;

for (item of buttons) {
  item.addEventListener("click", (e) => {

    let buttonText = e.target.innerText;
    // console.log("button Text is", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screen.value += screenValue;
      screenValue = buttonText;
        }    else if (buttonText == "c") {
      screenValue = " ";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
     

}

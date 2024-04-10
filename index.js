let knapp = document.querySelector(".knapp");

let currentColor = "blue";

function onClick() {
    let input = document.querySelector("#message");
    let inputValue = input.value;
    document.querySelector(".output").textContent = inputValue;
    //document.querySelector(".output").style.color = "red";
    
    console.log(currentColor);
    if (currentColor == "blue") {
        currentColor = "green";
        document.querySelector(".output").style.color = "green";
    } else if (currentColor == "green") {
        currentColor = "red";
        document.querySelector(".output").style.color = "red";
    } else {
        currentColor = "blue";
        document.querySelector(".output").style.color = "blue";
    }


}

knapp.addEventListener("click", (e) => onClick())





let isFirstValue = true;
let firstValue = "0" // Om det skulle vara ett number, 1 + 1 = 2, men vi vill ha 1 + 1 == 11 få vi vill lägga till nummer efter förra numret
let secondValue = "0";
let sum = 0;
let operator;

keys.addEventListener("click", (e) => {
    if (e.target.textContent >= 0 && e.target.textContent <= 9) {

        // om firstValue = "0" (viktigt med string!) så blir numret "01" nedan, och om det är 04 och man klickar på 5 blir det "045" 
       if(isFirstValue) {
        firstValue += e.target.textContent;
       } else {
        secondValue += e.target.textContent;
       }

    } else if (e.target.textContent === "+") {
        
        // sätter isFirstValue till false så att vi börjar skriva på secondValue
        isFirstValue = false;
        
        // Konvertera till exemple: "045" -> 45 (som nummer så man kan göra matematiska processer som addition och subrtaktion)
        firstValue = Number(firstValue);



    } else if (e.target.textContent === "-") {
        isFirstValue = false;
        firstValue = Number(firstValue);
    } else if (e.target.value == "=") {

        // Konvertera till exemple: "045" -> 45 (som nummer så man kan göra matematiska processer som addition och subrtaktion)
        secondValue = Number(secondValue);

        //spara värdet
        sum = firstValue + secondValue;
    }
})





let nine = document.querySelector("#btnNine");
let eight = document.querySelector("#btnEight");
let seven = document.querySelector("#btnSeven");
let six = document.querySelector("#btnSix");
let five = document.querySelector("#btnFive");
let four = document.querySelector("#btnFour");
let three = document.querySelector("#btnThree");
let two = document.querySelector("#btnTwo");
let one = document.querySelector("#btnOne");
let zero = document.querySelector("#btnZero");

let clear = document.querySelector("#btnC");
let negative = document.querySelector("#btnNegative");
let percent = document.querySelector("#btnPercent");
let divide = document.querySelector("#btnDivide");
let multiply = document.querySelector("#btnMultiply");
let minus = document.querySelector("#btnMinus");
let plus = document.querySelector("#btnPlus");
let ravn = document.querySelector("#btnRavn");
let zap = document.querySelector("#btnZap");

let currentNumber = document.querySelector("#currentNum");
currentNumber.textContent = "0";

let arrOfNums = [];
let arrOfOperators = [];

function updateCurrentNumber(e){
    if (currentNumber.textContent.length == 1 && currentNumber.textContent == 0){
        currentNumber.textContent = "";
    }
    currentNumber.textContent = currentNumber.textContent + e.target.textContent;
}

clear.addEventListener("click", function(){
    location.reload()
}, false);

negative.addEventListener("click", function(){
    if (currentNumber.textContent[0] != "-"){
    currentNumber.textContent = "-" + currentNumber.textContent;
    }
    else{
        currentNumber.textContent = currentNumber.textContent.slice(1);
    }
})

percent.addEventListener("click", function(){
    currentNumber.textContent = parseFloat(currentNumber.textContent) / 100;
})

plus.addEventListener("click", function(){
    arrOfNums.push(parseFloat(currentNumber.textContent));
    arrOfOperators.push("+");
    console.log(arrOfNums)
    console.log(arrOfOperators)
    currentNumber.textContent = "";
}, false);
minus.addEventListener("click", function(){
    arrOfNums.push(parseFloat(currentNumber.textContent));
    arrOfOperators.push("-");
    console.log(arrOfNums)
    console.log(arrOfOperators)
    currentNumber.textContent = "";
}, false);
divide.addEventListener("click", function(){
    arrOfNums.push(parseFloat(currentNumber.textContent));
    arrOfOperators.push("/");
    console.log(arrOfNums)
    console.log(arrOfOperators)
    currentNumber.textContent = "";
}, false);

multiply.addEventListener("click", function(){
    arrOfNums.push(parseFloat(currentNumber.textContent));
    arrOfOperators.push("*");
    console.log(arrOfNums)
    console.log(arrOfOperators)
    currentNumber.textContent = "";
}, false);

function equals(e){
    arrOfNums.push(parseFloat(currentNumber.textContent));
    let result = arrOfNums[0];
    for (let i = 0; i < arrOfNums.length - 1; i++){
        switch(arrOfOperators[i]){
            case "+":
                result += arrOfNums[i + 1];
                break;
            case "-":
                result -= arrOfNums[i + 1];
                break;
            case "*":
                result *= arrOfNums[i + 1];
                break;
            case "/":
                result /= arrOfNums[i + 1];
                break;
        }
    }
    currentNumber.textContent = result;
    arrOfNums = [];
    arrOfOperators = [];
}

ravn.addEventListener("click", equals, false);

zap.addEventListener("click", function(){
    currentNumber.textContent = currentNumber.textContent + ".";
}, false);

let obj = {
    nine: nine.addEventListener("click", updateCurrentNumber, false),
    eight: eight.addEventListener("click", updateCurrentNumber, false),
    seven: seven.addEventListener("click", updateCurrentNumber, false),
    six: six.addEventListener("click", updateCurrentNumber, false),
    five: five.addEventListener("click", updateCurrentNumber, false),
    four: four.addEventListener("click", updateCurrentNumber, false),
    three: three.addEventListener("click", updateCurrentNumber, false),
    two: two.addEventListener("click", updateCurrentNumber, false),
    one: one.addEventListener("click", updateCurrentNumber, false),
    zero: zero.addEventListener("click", updateCurrentNumber, false),
}


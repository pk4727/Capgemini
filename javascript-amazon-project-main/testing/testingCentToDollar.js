import { centToDollar } from "../scripts/calculation.js";

let result = document.querySelector(".testing-result");

let centMoney = [
    { cent: 0, dollar: '0.00' },
    { cent: 2095, dollar: '20.95' },
    { cent: 2000.5, dollar: '20.01' },
    { cent: 2000.4, dollar: '20.00' }
]

let output = "";
centMoney.forEach((testcase) => {
    if (centToDollar(testcase.cent)==testcase.dollar){
        output += "\nPass";
    }else{
        output += "\nFail";
        console.log(testcase.cent + " " + centToDollar(testcase.cent));
    }
})

result.innerHTML = output;
import { centToDollar } from "../scripts/calculation.js";

let result = document.querySelector(".testing-result");

let centMoney = [
    { id: 'zero', cent: 0, dollar: '0.00' },
    { id: 'exect', cent: 2095, dollar: '20.95' },
    { id: 'celing', cent: 2000.5, dollar: '20.01' },
    { id: 'floor', cent: 2000.4, dollar: '20.00' }
]


let output = "";
centMoney.forEach((testcase) => {
    if (centToDollar(testcase.cent) == testcase.dollar) {
        output += `${testcase.id} : Pass <br> `;
    } else {
        output += `${testcase.id} : Fail <br> `;
        console.log(testcase.cent + " " + centToDollar(testcase.cent));
    }
})
result.innerHTML = output;
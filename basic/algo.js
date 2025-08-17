// subscibe button functionality
document.getElementById("e").addEventListener("click",function(){
    const currentText = document.querySelector('#e');
    subscribe(currentText);
})

function subscribe(element) {
    if (element.innerHTML === "Subscribe") {
        element.innerHTML = "Subscribed";
        element.classList.add("is-subscribed"); // Add a class to change the style
    } else {
        element.innerHTML = "Subscribe";
        element.classList.remove("is-subscribed");
    }
}

// shipping cost calculation
document.getElementById("calculate").addEventListener("click", function(){
    costCalculation();
})

// shipping cost calculation on keydown event
// This will trigger the cost calculation when the user presses a key in the input field
document.getElementById("orderAmount").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is "Enter"
        costCalculation();
    }
});

function costCalculation() {
    const inputElement = document.querySelector('#orderAmount'); // Get the input element in string
    const cost = Number(inputElement.value); // Convert input to number
    let shippingCost = 0;
    if(cost < 40 && cost > 0){
        shippingCost = cost + 10;
    }else if (cost >= 40) {
        shippingCost = cost;
    }else{
        document.querySelector(".shippingCost").innerHTML = "Invalid Amoun !";
        return;
    }
    document.querySelector(".shippingCost").innerHTML =`Shippin Cost of Material is : $${shippingCost}.`
    console.log(`Shipping Cost of Material is : ${shippingCost}.`);
}


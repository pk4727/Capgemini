document.getElementById("e").addEventListener("click",function(){
    const currentText = document.querySelector('#e');
    subscribe(currentText);
})

function subscribe(element) {
    if (element.innerHTML === "Subscribe") {
        element.innerHTML = "Subscribed";
    } else {
        element.innerHTML = "Subscribe";
    }
}


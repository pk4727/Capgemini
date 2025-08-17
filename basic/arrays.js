let todoList = [];

// Adding event listeners to buttons for adding todos
document.getElementById("add-todo1").addEventListener("click", function () {
    let inputElement = document.querySelector(".todoInput1");
    let todo = inputElement.value;
    todoList.push(todo);
    console.log(todoList);
    inputElement.value = ""; // clear the box
})

// It will add the todo to the todoList array and display it
document.getElementById("add-todo2").addEventListener("click", function () {
    let inputElement = document.querySelector(".todoInput2");
    let todo = inputElement.value;
    todoList.push(todo);
    console.log(todoList);
    inputElement.value = ""; // clear the box

    // Display the updated todo list
    let todoListElement = "";
    for (let i = 0; i < todoList.length; i++) {
        todoListElement += `<p> ${todoList[i]} </p>`;
    }
    document.querySelector(".lists2").innerHTML = todoListElement;
})

// It will also allow the user to delete a todo by clicking the delete button next to it
document.getElementById("addTodo").addEventListener("click", function () {
    let inputElement = document.querySelector(".todo-input");
    let todo = inputElement.value;
    todoList.push(todo);
    console.log(todoList);
    inputElement.value = ""; // clear the box
    renderList();
})

// This function will render the todo list on the page
// It will also allow the user to delete a todo by clicking the delete button next to it
function renderList() {
    let todoListElement = "";
    for (let i = 0; i < todoList.length; i++) {
        todoListElement += `<p> ${todoList[i]} 
        <button onclick = "todoList.splice(${i},1);
        renderList()">Delete</button> 
        </p>`;
    }
    document.querySelector(".lists").innerHTML = todoListElement;
}

// This is a new todo list with names and dates
let todoList2 = [{ name: "a", date: "2023-10-01" }, { name: "b", date: "2023-10-02" }];

// Adding event listener to the button for adding todos with names and dates and displaying them also delete option
document.getElementById("add").addEventListener("click", function () {
    let inputName = document.querySelector(".todo-name");
    let dateElement = document.querySelector(".todo-date");
    todoList2.push({ name: inputName.value, date: dateElement.value });
    console.log(todoList2);
    inputName.value = ""; // clear the box
    renderObjectList();
})

function renderObjectList() {
    let todoListElement = "";
    for (let i = 0; i < todoList2.length; i++) {
        const todoObject = todoList2[i];
        const { name, date } = todoObject;
        todoListElement += `<p> ${name} - ${date}
        <button onclick = "todoList2.splice(${i},1);
        renderObjectList()">Delete</button> 
        </p>`;
    }
    document.querySelector(".todoLists").innerHTML = todoListElement;
}

// operation on array
let arr = [-1, 2, 6, 4, 8, 8, -4, 5, -4, 6]

// remove negative
let positive_arr = arr.filter((value) => {
    return value >= 0;
});
console.log(positive_arr)
positive_arr.forEach((value) => { console.log(value) });

// remove dublicate
let dublicate_removed = arr.filter((value, index) => {
    arr.indexOf(value) === index; // keep first element only
});
console.log(dublicate_removed);

// mapped array means convert original arr into another with some operation
let maped_arr = arr.map((value) => {
    return value + 10;
});
console.log(maped_arr);
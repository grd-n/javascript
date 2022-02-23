const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(todoInput.value);
}

todoForm.addEventListener("submit", handleToDoSubmit);
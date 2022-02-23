const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(todoInput.value);
    const newToDo = todoInput.value;
    todoInput.value = "";
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
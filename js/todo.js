const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = []; // set this to be mutable

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // 고유 식별자
    };
    todoInput.value = ""; // empty field
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); // todo.id is num, li.ld is string
    saveTodos();
    li.remove(); // instead of li.classList.add(HIDDEN);
}

todoForm.addEventListener("submit", addTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) { // 새로고침 시 초기설정
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
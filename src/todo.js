const todoForm = document.getElementById("todo__form");
const todoInput = document.querySelector("#todo__form input");
const todoList = document.getElementById("todo__list");

let toDos = [];

const TODOS_KEY = "todos_key";

function savedTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  savedTodos();
}
function addTodo(whatTodo) {
  const li = document.createElement("li");
  li.id = whatTodo.id;
  const span = document.createElement("span");
  span.innerText = whatTodo.text;
  const btn = document.createElement("button");
  btn.innerText = " ❌ DELETE ❌ ";
  btn.addEventListener("click", deleteTodo);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
}

function submitTodo(event) {
  event.preventDefault();
  const whatTodo = todoInput.value;
  todoInput.value = "";
  const whatTodoObj = {
    text: whatTodo,
    id: Date.now(),
  };
  addTodo(whatTodoObj);

  toDos.push(whatTodoObj);
  savedTodos();
}

todoForm.addEventListener("submit", submitTodo);

const todoStorage = localStorage.getItem(TODOS_KEY);

if (todoStorage !== null) {
  const paresTodos = JSON.parse(todoStorage);
  toDos = paresTodos;
  paresTodos.forEach(addTodo);
}
